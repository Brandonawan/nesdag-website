import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nesdag.co/",
      lastModified: "2026-10-17",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
