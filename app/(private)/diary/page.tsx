import GlassPanel from "../../../components/glass/GlassPanel";
import Link from "next/link";
import { getDiaryEntries } from "../../../lib/db";

export const dynamic = "force-dynamic";

export default async function DiaryPage() {
  const entries = await getDiaryEntries();

  return (
    <GlassPanel title="Private Diary">
      <p>Welcome back. These entries are protected by middleware auth.</p>
      <ul style={{ display: "grid", gap: "12px", paddingLeft: "18px" }}>
        {entries.map((entry) => (
          <li key={entry.id}>
            <Link href={`/diary/${entry.id}`}>{entry.title}</Link>
            <p style={{ margin: "4px 0 0", opacity: 0.75 }}>{entry.summary}</p>
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}
