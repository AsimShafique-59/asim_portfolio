import { portfolioData } from "./portfolio";

const rawDescription = portfolioData.heroSummary || "Portfolio website.";
const normalizedDescription = rawDescription.replace(/\s+/g, " ").trim();
const siteDescription =
  normalizedDescription.length > 160 ? `${normalizedDescription.slice(0, 157)}...` : normalizedDescription;

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  "http://localhost:3000";
const siteUrl = rawSiteUrl.endsWith("/") ? rawSiteUrl.slice(0, -1) : rawSiteUrl;

export const siteConfig = {
  siteName: `${portfolioData.fullName} | ${portfolioData.role}`,
  siteDescription,
  siteUrl,
  defaultImage: portfolioData.brandLogoSrc || "/images/site-logo.jpg",
  personName: portfolioData.fullName,
  role: portfolioData.role,
  contact: portfolioData.contact,
  keywords: [
    "Python engineer",
    "Django developer",
    "Django REST Framework",
    "FastAPI",
    "Generative AI",
    "LLM automation",
    "RAG systems",
    "AI engineer",
    "Backend developer"
  ],
  social: {
    github: portfolioData.contact?.githubUrl,
    linkedin: portfolioData.contact?.linkedInUrl
  }
};
