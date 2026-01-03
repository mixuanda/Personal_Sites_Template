import type { ReactNode } from "react";

export default function GlassPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="glass-surface" style={styles.panel}>
      <header style={styles.header}>
        <h2 style={styles.title}>{title}</h2>
      </header>
      <div>{children}</div>
    </section>
  );
}

const styles = {
  panel: {
    padding: "24px",
    borderRadius: "24px",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    background: "rgba(15, 23, 42, 0.5)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 24px 48px rgba(15, 23, 42, 0.25)",
  },
  header: {
    marginBottom: "16px",
  },
  title: {
    margin: 0,
    fontSize: "1.4rem",
  },
};
