const looksLikeMermaid = (text) => {
	const t = (text ?? "").trimStart();

	return (
		t.startsWith("stateDiagram") ||
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

		// If already wrapped, just update width
		let inner = container.querySelector(":scope > .mermaid-diagram");
		if (!inner) {
			inner = document.createElement("div");
			inner.className = "mermaid-diagram";

			// Move the SVG inside the inner wrapper
			container.replaceChildren(inner);
			inner.appendChild(svg);
		}

		inner.style.width = `${Math.ceil(vbWidth)}px`;
	}
};

const run = async () => {
	const codeEls = Array.from(document.querySelectorAll("pre.astro-code > code"));

	const mermaidCandidates = codeEls.filter((code) => {
		const cls = code.className || "";
		if (cls.includes("language-mermaid") || cls.includes("lang-mermaid")) return true;
		return looksLikeMermaid(code.textContent);
	});

	if (mermaidCandidates.length === 0) return;

	const { default: mermaid } = await import("mermaid");

	mermaid.initialize({
		startOnLoad: false,
		securityLevel: "strict",
		theme: "default",
		themeVariables: {
			fontSize: "18px",
		},
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

	// Make the diagram actually scrollable (ensures scrollWidth > clientWidth)
	ensureScrollableMermaid(".mermaid");
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", run, { once: true });
} else {
	run();
}