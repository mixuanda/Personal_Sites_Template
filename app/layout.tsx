import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Evanalysis Personal Site",
  description: "Personal site template with glass UI and CMS-ready structure.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
