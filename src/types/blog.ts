import type { StaticImageData } from "next/image";

export type BlogCategory =
  | "Food & Flavors"
  | "Behind the Scenes"
  | "Nightlife"
  | "Stories & Guides";

export type BlogSectionType =
  | "paragraph"
  | "heading2"
  | "heading3"
  | "quote"
  | "image"
  | "list"
  | "callout";

export interface BlogContentSection {
  type: BlogSectionType;
  text?: string;
  items?: string[]; // for bullet lists
  author?: string; // for quote attribution
  image?: StaticImageData; // for inline image
  alt?: string;
  caption?: string;
  calloutTitle?: string;
  calloutType?: "tip" | "highlight" | "info";
}

export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string; // e.g. "September 10, 2026"
  isoDate: string; // ISO 8601 for Schema.org and SEO: "2026-09-10T12:00:00+05:30"
  readTime: string; // e.g. "5 min read"
  category: BlogCategory;
  featuredImage: StaticImageData;
  featuredImageAlt: string;
  author: BlogAuthor;
  sections: BlogContentSection[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}
