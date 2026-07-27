import type { Metadata } from "next";
import SkillsContent from "@/components/pages/SkillsContent";

export const metadata: Metadata = {
  title: { absolute: "Python, Django & AI Skills | Developer in Pakistan" },
  description:
    "A full breakdown of the Python, Django, FastAPI, and generative AI skills Asim Shafique uses to build production backend systems in Pakistan.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Python, Django & AI Skills | Developer in Pakistan",
    description:
      "A full breakdown of the Python, Django, FastAPI, and generative AI skills Asim Shafique uses to build production backend systems in Pakistan.",
    url: "/skills",
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}
