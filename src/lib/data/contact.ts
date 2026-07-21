import { Mail, Phone, Linkedin, Github, type LucideIcon } from "lucide-react";

export type ContactMethod = {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
  color: string;
};

export const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: "Email",
    value: "asimshafique59@gmail.com",
    link: "mailto:asimshafique59@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 325 415 5556",
    link: "tel:+923254155556",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/muhammad-asim-shafique-0581411aa",
    link: "https://www.linkedin.com/in/muhammad-asim-shafique-0581411aa/",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/AsimShafique-59",
    link: "https://github.com/AsimShafique-59",
    color: "from-gray-700 to-gray-900",
  },
];
