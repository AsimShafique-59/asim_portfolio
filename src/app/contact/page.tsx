import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: { absolute: "Contact | Python & Django Developer in Pakistan" },
  description:
    "Get in touch with Asim Shafique, a Python and Django developer in Lahore, Pakistan, available for remote backend and AI engineering projects worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Python & Django Developer in Pakistan",
    description:
      "Get in touch with Asim Shafique, a Python and Django developer in Lahore, Pakistan, available for remote backend and AI engineering projects worldwide.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
