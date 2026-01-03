import Link from "next/link";
import GlassCard from "./glass/GlassCard";
import type { ContentItem } from "../lib/content";

export default function PostCard({ item }: { item: ContentItem }) {
  return (
    <GlassCard title={item.title} description={item.summary}>
      <div style={styles.meta}>
        <span>{item.date}</span>
        <span className="tag">{item.category}</span>
      </div>
      <div style={styles.tags}>
        {item.tags.map((tag) => (
          <span className="tag" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
      <Link href={item.href} style={styles.link}>
        Read more →
      </Link>
    </GlassCard>
  );
}

const styles = {
  meta: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    fontSize: "0.8rem",
    color: "rgba(226, 232, 240, 0.7)",
  },
  tags: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap" as const,
  },
  link: {
    fontWeight: 600,
    marginTop: "8px",
  },
};
