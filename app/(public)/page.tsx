import GlassPanel from "../../components/glass/GlassPanel";
import PostCard from "../../components/PostCard";
import { contentItems } from "../../lib/content";

export default function HomePage() {
  return (
    <>
      <GlassPanel title="Welcome">
        <p>
          This is a glassmorphism-ready personal site template inspired by Sidefolio.
        </p>
        <p>
          Explore the latest posts, projects, and notes across tags and categories.
        </p>
      </GlassPanel>
      <section className="grid cols-2">
        {contentItems.map((item) => (
          <PostCard key={item.slug} item={item} />
        ))}
      </section>
    </>
  );
}
