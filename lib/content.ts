export type ContentItem = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  tags: string[];
  href: string;
  toc: { id: string; text: string }[];
};

export const contentItems: ContentItem[] = [
  {
    slug: "glass-math",
    title: "Glass Cards + Math Demo",
    summary: "A quick demo showing KaTeX-ready math, lists, and a TOC section.",
    date: "2024-02-10",
    category: "Design",
    tags: ["glass", "katex", "layout"],
    href: "/blog/glass-math",
    toc: [
      { id: "intro", text: "Why glass UI" },
      { id: "math", text: "Math snippet" },
      { id: "summary", text: "Summary" },
    ],
  },
  {
    slug: "sidefolio-update",
    title: "Sidefolio Layout Update",
    summary: "How the sidebar + card grid behaves across breakpoints.",
    date: "2024-02-22",
    category: "Layout",
    tags: ["sidebar", "responsive"],
    href: "/blog/sidefolio-update",
    toc: [
      { id: "layout", text: "Layout goals" },
      { id: "grid", text: "Grid tweaks" },
    ],
  },
  {
    slug: "category-system",
    title: "Categories + Tags in Practice",
    summary: "Organize notes and projects with a lightweight taxonomy.",
    date: "2024-03-05",
    category: "Content",
    tags: ["taxonomy", "contentlayer"],
    href: "/blog/category-system",
    toc: [
      { id: "overview", text: "Overview" },
      { id: "implementation", text: "Implementation" },
    ],
  },
];

export const diaryEntries = [
  {
    id: "2024-03-01",
    title: "Private entry: launch checklist",
    summary: "Notes about private build steps and auth checks.",
    content:
      "This entry is protected by middleware and fetched dynamically from the server.",
  },
  {
    id: "2024-03-06",
    title: "Private entry: CMS sync",
    summary: "Tracking CMS editor flows and content updates.",
    content: "Reminder: keep private data out of static builds.",
  },
];
