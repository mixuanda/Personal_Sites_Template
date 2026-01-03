import GlassPanel from "../../../../components/glass/GlassPanel";
import Toc from "../../../../components/Toc";
import { contentItems } from "../../../../lib/content";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const item = contentItems.find((entry) => entry.slug === params.slug);

  if (!item) {
    return (
      <GlassPanel title="Post not found">
        <p>We couldn't locate that post.</p>
      </GlassPanel>
    );
  }

  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <GlassPanel title={item.title}>
        <p>{item.summary}</p>
        <h2 id="intro">Why glass UI</h2>
        <p>
          Glassmorphism pairs translucent layers with soft borders so content feels
          structured yet airy.
        </p>
        <h2 id="math">Math snippet</h2>
        <p>
          KaTeX-ready formula: <code>\\int_0^\\infty e^{-x} dx = 1</code>
        </p>
        <h2 id="summary">Summary</h2>
        <p>Combine cards, TOC, and tags for a calm reading experience.</p>
      </GlassPanel>
      <Toc items={item.toc} />
    </div>
  );
}
