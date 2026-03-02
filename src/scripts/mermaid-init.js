/**
 * Mermaid client-side renderer (currently NOT enabled in production).
 *
 * Status:
 * - Kept intentionally for a future revisit.
 * - The documentation page currently uses a pre-rendered image instead.
 *
 * Why this remains / why it was disabled:
 * - Astro layouts render in a server/build context, so any Mermaid bootstrap must be strictly browser-only
 *   (guard all `document` usage). Several approaches caused "document is not defined" during build/SSR.
 * - Approaches that loaded scripts via `?url` worked around SSR, but then failed in the browser because bare
 *   imports like `import mermaid from "mermaid"` are not resolvable without bundling/import maps on GitHub Pages.
 * - CDN “global mermaid” builds were also unreliable in this project’s environment.
 *
 * Re-enable strategy (if revisiting):
 * - Ensure the init code is emitted as a bundled client module (Vite-resolved imports) and only executes in-browser.
 */
import mermaid from "mermaid";

const looksLikeMermaid = (text) => {
	const t = (text ?? "").trimStart();
	return (
		t.startsWith("stateDiagram") ||
		t.startsWith("stateDiagram-v2") ||
		t.startsWith("flowchart") ||
		t.startsWith("sequenceDiagram") ||
		t.startsWith("classDiagram") ||
		t.startsWith("erDiagram") ||
		t.startsWith("gantt") ||
		t.startsWith("journey") ||
		t.startsWith("gitGraph") ||
		t.startsWith("mindmap") ||
		t.startsWith("timeline") ||
		t.startsWith("pie")
	);
};

const ensureScrollableMermaid = (rootSelector = ".mermaid") => {
	const containers = document.querySelectorAll(rootSelector);

	for (const container of containers) {
		const svg = container.querySelector("svg");
		if (!svg) continue;

		if (svg.getAttribute("width") === "100%") svg.removeAttribute("width");

		const viewBox = svg.getAttribute("viewBox");
		const parts = (viewBox ?? "").split(/\s+/).map(Number);
		const vbWidth = parts.length === 4 ? parts[2] : NaN;

		if (!Number.isFinite(vbWidth) || vbWidth <= 0) continue;

		let inner = container.querySelector(":scope > .mermaid-diagram");
		if (!inner) {
			inner = document.createElement("div");
			inner.className = "mermaid-diagram";
			container.replaceChildren(inner);
			inner.appendChild(svg);
		}

		inner.style.width = `${Math.ceil(vbWidth)}px`;
	}
};

const run = async () => {
	// Match Astro’s Shiki output regardless of extra classes/attrs like `is:raw`
	const codeEls = Array.from(
		document.querySelectorAll('pre[class*="astro-code"] > code, pre.astro-code > code')
	);

	const mermaidCandidates = codeEls.filter((code) => {
		const cls = code.className || "";
		if (cls.includes("language-mermaid") || cls.includes("lang-mermaid")) return true;
		return looksLikeMermaid(code.textContent);
	});

	if (mermaidCandidates.length === 0) return;

	mermaid.initialize({
		startOnLoad: false,
		securityLevel: "strict",
		theme: "default",
		themeVariables: { fontSize: "18px" },
	});

	for (const code of mermaidCandidates) {
		const pre = code.closest("pre");
		if (!pre) continue;

		const wrapper = document.createElement("div");
		wrapper.className = "mermaid";
		wrapper.textContent = code.textContent ?? "";
		pre.replaceWith(wrapper);
	}

	await mermaid.run({ querySelector: ".mermaid" });
	ensureScrollableMermaid(".mermaid");
};

if (typeof document !== "undefined") {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", run, { once: true });
	} else {
		run();
	}
}