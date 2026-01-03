import GlassPanel from "../../../components/glass/GlassPanel";
import GlassCard from "../../../components/glass/GlassCard";

const projects = [
  {
    title: "Glass UI Library",
    description: "Reusable glass cards, panels, and toggles for Next.js.",
  },
  {
    title: "Private Diary",
    description: "A protected, server-rendered diary powered by middleware auth.",
  },
  {
    title: "CMS Ready Blog",
    description: "Structured content ready for TinaCMS or Decap CMS.",
  },
];

export default function ProjectsPage() {
  return (
    <GlassPanel title="Projects">
      <div className="grid cols-3">
        {projects.map((project) => (
          <GlassCard
            key={project.title}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </GlassPanel>
  );
}
