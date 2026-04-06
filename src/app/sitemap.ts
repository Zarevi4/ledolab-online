import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data";
import { facts } from "@/lib/facts-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ledolab.online";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
  ];

  const casePages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${base}/cases/${cs.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const factPages: MetadataRoute.Sitemap = facts.map((f) => ({
    url: `${base}/facts/${f.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...casePages, ...factPages];
}
