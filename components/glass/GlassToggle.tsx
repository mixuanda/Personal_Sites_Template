"use client";

import { useEffect, useState } from "react";

export default function GlassToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", enabled);
  }, [enabled]);

  return (
    <button
      className="sidebar-toggle"
      onClick={() => setEnabled((value) => !value)}
      type="button"
      aria-pressed={enabled}
    >
      {enabled ? "High Contrast On" : "High Contrast Off"}
    </button>
  );
}
