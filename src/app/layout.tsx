import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Asim Shafique | Portfolio",
  description: "Asim Shafique portfolio - Python, DRF, FastAPI and Generative AI Engineer.",
  icons: { icon: "/logo.svg", apple: "/logo.svg" },
  openGraph: {
    title: "Asim Shafique | Portfolio",
    description: "Python, DRF, FastAPI and Generative AI Engineer.",
    images: ["/logo.svg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950/30 dark:to-gray-950">
        <ThemeProvider>
          <AnimatedBackground />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
