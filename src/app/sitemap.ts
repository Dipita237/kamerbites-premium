import type { MetadataRoute } from "next";

const baseUrl = "https://kamerbites-premium.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/notre-histoire", "/reservation", "/galerie"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}