import GlassPanel from "../../../components/glass/GlassPanel";

const notes = [
  "Category theory overview",
  "Optimization and Lagrangians",
  "Probability review",
];

export default function NotesPage() {
  return (
    <GlassPanel title="Notes">
      <ul style={{ display: "grid", gap: "12px", paddingLeft: "18px" }}>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </GlassPanel>
  );
}
