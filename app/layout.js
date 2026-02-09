import { Outfit, Poppins, Syne } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"]
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700", "800"]
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"]
});

export const metadata = {
  title: "Asim Shafique | Portfolio",
  description:
    "Portfolio of Asim Shafique, software engineer with experience in Django, AI systems, and scalable backend development.",
  icons: {
    icon: "/images/site-logo.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${poppins.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
