import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://asimshafique.netlify.app"),
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
