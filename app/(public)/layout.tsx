import type { ReactNode } from "react";
import GlassSidebar from "../../components/glass/GlassSidebar";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container sidebar-layout">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <details open style={{ display: "block" }}>
          <summary style={styles.summary}>Menu</summary>
          <GlassSidebar />
        </details>
      </div>
      <main style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {children}
      </main>
    </div>
  );
}

const styles = {
  summary: {
    cursor: "pointer",
    marginBottom: "12px",
    fontWeight: 600,
  },
};
