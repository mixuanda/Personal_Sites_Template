import GlassPanel from "../../../components/glass/GlassPanel";
import PostCard from "../../../components/PostCard";
import { contentItems } from "../../../lib/content";

export default function BlogPage() {
  return (
    <GlassPanel title="Blog">
      <div className="grid cols-2">
        {contentItems.map((item) => (
          <PostCard key={item.slug} item={item} />
        ))}
      </div>
    </GlassPanel>
  );
}
