"use client";

import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/diary";

  return (
    <div className="container">
      <div className="glass-surface" style={styles.card}>
        <h1 style={{ marginTop: 0 }}>Private Area Login</h1>
        <p>
          This is a lightweight demo login. Click below to set a demo auth cookie.
        </p>
        <button
          className="sidebar-toggle"
          onClick={() => {
            document.cookie = "evanalysis_auth=1; path=/";
            window.location.href = next;
          }}
          type="button"
        >
          Enter private diary
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "24px",
    borderRadius: "24px",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(16px)",
  },
};
