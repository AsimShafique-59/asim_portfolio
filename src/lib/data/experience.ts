export type ExperienceEntry = {
  year: string;
  title: string;
  company: string;
  description: string;
  color: string;
};

export const experience: ExperienceEntry[] = [
  {
    year: "2026",
    title: "Django Python Developer",
    company: "Hashed Systems",
    description:
      "Building and maintaining backend services using Django and Django REST Framework, with a focus on scalable APIs and production reliability.",
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2025",
    title: "Junior AI Engineer",
    company: "Web Excels",
    description: "Developing AI-powered applications using Python, LangChain, OpenAI API, and vector databases for production workflows.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2025",
    title: "Software Engineer (Backend and AI Systems)",
    company: "Artificizen",
    description: "Designed and delivered chatbot and backend solutions with Django and modern AI tooling.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    year: "2024",
    title: "Python Backend Developer",
    company: "AB IT and Technical Services Limited",
    description: "Developed scalable backend services, APIs, and deployment pipelines for distributed production environments.",
    color: "from-emerald-500 to-teal-500",
  },
];

export const certifications = [
  {
    name: "Qualifi Level 5 Diploma in Information Technology",
    org: "Qualifi (UK Accredited)",
    year: "2025",
    details: "IELTS Academic Overall Band Score: 6.0",
  },
];
