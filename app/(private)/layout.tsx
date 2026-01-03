import type { ReactNode } from "react";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}
