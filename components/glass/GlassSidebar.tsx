import Link from "next/link";
import GlassToggle from "./GlassToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/diary", label: "Diary (Private)" },
];

export default function GlassSidebar() {
  return (
    <aside className="glass-surface" style={styles.sidebar}>
      <div style={styles.profile}>
        <div style={styles.avatar}>EA</div>
        <div>
          <h1 style={styles.name}>Evanalysis</h1>
          <p style={styles.bio}>Builder of glassy, math-forward personal sites.</p>
        </div>
      </div>
      <GlassToggle />
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    padding: "24px",
    borderRadius: "24px",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(16px)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
    position: "sticky" as const,
    top: "24px",
  },
  profile: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  avatar: {
    width: "52px",
    height: "52px",
    borderRadius: "18px",
    background: "rgba(99, 102, 241, 0.35)",
    display: "grid",
    placeItems: "center",
    fontWeight: 700,
  },
  name: {
    margin: 0,
    fontSize: "1.2rem",
  },
  bio: {
    margin: 0,
    fontSize: "0.85rem",
    color: "rgba(226, 232, 240, 0.75)",
  },
};
