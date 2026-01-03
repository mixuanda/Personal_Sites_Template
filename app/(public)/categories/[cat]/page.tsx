import GlassPanel from "../../../../components/glass/GlassPanel";
import PostCard from "../../../../components/PostCard";
import { contentItems } from "../../../../lib/content";

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const items = contentItems.filter(
    (item) => item.category.toLowerCase() === params.cat.toLowerCase()
  );

  return (
    <GlassPanel title={`Category: ${params.cat}`}>
      <div className="grid cols-2">
        {items.map((item) => (
          <PostCard key={item.slug} item={item} />
        ))}
      </div>
      {items.length === 0 ? <p>No posts found for this category.</p> : null}
    </GlassPanel>
  );
}
