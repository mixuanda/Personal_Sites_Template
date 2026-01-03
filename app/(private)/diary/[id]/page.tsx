import GlassPanel from "../../../../components/glass/GlassPanel";
import { getDiaryEntry } from "../../../../lib/db";

export const dynamic = "force-dynamic";

export default async function DiaryEntryPage({
  params,
}: {
  params: { id: string };
}) {
  const entry = await getDiaryEntry(params.id);

  if (!entry) {
    return (
      <GlassPanel title="Entry not found">
        <p>We could not find that diary entry.</p>
      </GlassPanel>
    );
  }

  return (
    <GlassPanel title={entry.title}>
      <p>{entry.content}</p>
    </GlassPanel>
  );
}
