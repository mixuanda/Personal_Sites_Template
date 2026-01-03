import type { ReactNode } from "react";

export default function GlassCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <article className="glass-surface" style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      {description ? <p style={styles.description}>{description}</p> : null}
      {children}
    </article>
  );
}

const styles = {
  card: {
    padding: "20px",
    borderRadius: "20px",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    background: "rgba(15, 23, 42, 0.55)",
    backdropFilter: "blur(16px)",
    boxShadow: "0 20px 40px rgba(15, 23, 42, 0.25)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  title: {
    margin: 0,
    fontSize: "1.1rem",
  },
  description: {
    margin: 0,
    color: "rgba(226, 232, 240, 0.75)",
    fontSize: "0.95rem",
  },
};
