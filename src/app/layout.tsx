import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://asimshafique.netlify.app";
const SITE_NAME = "Asim Shafique | Python & Django Developer in Pakistan";
const SITE_DESCRIPTION =
  "Asim Shafique is a Python & Django developer based in Lahore, Pakistan, building scalable backend systems, REST APIs, and generative AI applications for clients worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Asim Shafique",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Python developer Pakistan",
    "Django developer Pakistan",
    "Python Django developer Lahore",
    "FastAPI developer Pakistan",
    "Generative AI engineer Pakistan",
    "backend engineer Lahore",
  ],
  authors: [{ name: "Asim Shafique", url: SITE_URL }],
  alternates: { canonical: "/" },
  icons: { icon: "/logo.svg", apple: "/logo.svg" },
  openGraph: {
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/profile.png", width: 1200, height: 1200, alt: "Asim Shafique - Python & Django Developer in Pakistan" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/profile.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: SITE_URL,
  mainEntity: {
    "@type": "Person",
    name: "Asim Shafique",
    url: SITE_URL,
    image: `${SITE_URL}/profile.png`,
    jobTitle: "Python & Django Developer",
    description: SITE_DESCRIPTION,
    email: "mailto:asimshafique59@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    sameAs: ["https://github.com/AsimShafique-59", "https://www.linkedin.com/in/muhammad-asim-shafique-0581411aa/"],
    knowsAbout: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "Agentic RAG",
      "Docker",
      "AWS",
      "CI/CD",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
