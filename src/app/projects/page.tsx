import type { Metadata } from "next";
import ProjectsContent from "@/components/pages/ProjectsContent";

export const metadata: Metadata = {
  title: { absolute: "Python & Django Projects | Asim Shafique" },
  description:
    "Explore real-world Python, Django, and FastAPI projects built by Asim Shafique, a backend and generative AI developer based in Pakistan.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Python & Django Projects | Asim Shafique",
    description:
      "Explore real-world Python, Django, and FastAPI projects built by Asim Shafique, a backend and generative AI developer based in Pakistan.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
