import Link from "next/link";

export type TocItem = {
  id: string;
  text: string;
};

export default function Toc({ items }: { items: TocItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="glass-surface" style={styles.toc}>
      <strong>On this page</strong>
      <ul style={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

const styles = {
  toc: {
    padding: "16px",
    borderRadius: "18px",
    border: "1px solid rgba(148, 163, 184, 0.3)",
    background: "rgba(15, 23, 42, 0.45)",
    backdropFilter: "blur(12px)",
  },
  list: {
    margin: "12px 0 0",
    paddingLeft: "18px",
    display: "grid",
    gap: "8px",
    fontSize: "0.9rem",
  },
};
