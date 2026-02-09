import { siteConfig } from "@/data/site";

export function GET() {
  const baseUrl = siteConfig.siteUrl || "http://localhost:3000";
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api",
    `Sitemap: ${baseUrl}/sitemap.xml`,
    ""
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
