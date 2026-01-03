import GlassPanel from "../../../../components/glass/GlassPanel";
import PostCard from "../../../../components/PostCard";
import { contentItems } from "../../../../lib/content";

export default function TagPage({ params }: { params: { tag: string } }) {
  const items = contentItems.filter((item) =>
    item.tags.includes(params.tag)
  );

  return (
    <GlassPanel title={`Tag: ${params.tag}`}>
      <div className="grid cols-2">
        {items.map((item) => (
          <PostCard key={item.slug} item={item} />
        ))}
      </div>
      {items.length === 0 ? <p>No posts found for this tag.</p> : null}
    </GlassPanel>
  );
}
