import { Fraunces, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { siteConfig } from "@/data/site";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "600", "700"]
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["600", "700"]
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500"]
});

const siteUrl = siteConfig.siteUrl;
const siteImage = new URL(siteConfig.defaultImage, siteUrl).toString();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.personName}`
  },
  description: siteConfig.siteDescription,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.personName }],
  creator: siteConfig.personName,
  publisher: siteConfig.personName,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/images/site-logo.svg",
    apple: "/images/site-logo.svg",
    shortcut: "/images/site-logo.svg"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteImage,
        alt: `${siteConfig.personName} portrait`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    images: [siteImage]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff6b4a"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${spaceGrotesk.variable} ${fraunces.variable} ${jetBrainsMono.variable}`}>{children}</body>
    </html>
  );
}
