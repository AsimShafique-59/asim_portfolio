import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

function buildLocation(location) {
  if (!location) return null;
  const [city, country] = location.split(",").map((part) => part.trim());
  return {
    "@type": "PostalAddress",
    addressLocality: city || location,
    addressCountry: country || undefined
  };
}

export default function SeoJsonLd() {
  const siteUrl = siteConfig.siteUrl;
  const imageUrl = new URL(siteConfig.defaultImage, siteUrl).toString();
  const sameAs = [siteConfig.social?.github, siteConfig.social?.linkedin].filter(Boolean);
  const location = buildLocation(siteConfig.contact?.location);
  const services = portfolioData.services || [];
  const faq = portfolioData.faq || [];
  const projects = portfolioData.projects || [];

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.siteName,
      description: siteConfig.siteDescription,
      inLanguage: "en"
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteConfig.siteName,
      isPartOf: { "@id": `${siteUrl}/#website` },
      description: siteConfig.siteDescription,
      inLanguage: "en"
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteConfig.personName,
      jobTitle: siteConfig.role,
      image: imageUrl,
      url: siteUrl,
      knowsAbout: portfolioData.heroBadges || undefined,
      sameAs,
      email: siteConfig.contact?.email ? `mailto:${siteConfig.contact.email}` : undefined,
      telephone: siteConfig.contact?.phone || undefined,
      address: location || undefined
    },
    ...services.map((service, index) => ({
      "@type": "Service",
      "@id": `${siteUrl}/#service-${index + 1}`,
      serviceType: service.title,
      description: service.description,
      provider: { "@id": `${siteUrl}/#person` }
    })),
    projects.length
      ? {
          "@type": "ItemList",
          "@id": `${siteUrl}/#projects`,
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            url: project.liveUrl || siteUrl
          }))
        }
      : null,
    faq.length
      ? {
          "@type": "FAQPage",
          "@id": `${siteUrl}/#faq`,
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }
      : null
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph.filter(Boolean)
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />;
}
