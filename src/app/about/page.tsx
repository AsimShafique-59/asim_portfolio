import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: { absolute: "About Asim Shafique | Python Developer in Pakistan" },
  description:
    "Learn about Asim Shafique, a Python and Django developer based in Lahore, Pakistan, with 2+ years building backend systems and AI-powered applications.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Asim Shafique | Python Developer in Pakistan",
    description:
      "Learn about Asim Shafique, a Python and Django developer based in Lahore, Pakistan, with 2+ years building backend systems and AI-powered applications.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
