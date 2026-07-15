import type { SvelteComponent } from "svelte";
import type { TableOfContent } from "./types";

const BLOG_POST_PATH = "/blog/"

export interface BlogFrontmatter {
  title: string;
  subtitle: string;
  date: string;
  author: string;
  tags: string[];
  toc: TableOfContent[];
  [key: string]: unknown;
}


interface BlogMdsvexModule {
  default: typeof SvelteComponent;
  metadata: BlogFrontmatter;
}


export function getAllBlogs() {
  const blogs = import.meta.glob(
    "/blog/*.md",
    { eager: true }
  ) as Record<string, BlogMdsvexModule>;

  const posts = Object.entries(blogs).map(([path, mod]) => ({
    slug: path.replace(/\.md$/, ""),
    ...mod.metadata
  }));

  return posts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}


export function getBlogs(limit: number) {
  const blogs = getAllBlogs();
  return blogs.slice(0, limit);
}


export async function getBlog(slug: string) {
  const path = `${BLOG_POST_PATH}${slug}.md`;
  const posts = import.meta.glob("/blog/*.md") as Record<string, () => Promise<BlogMdsvexModule>>;
  const resolver = posts[path];

  if (!resolver) return null;
  const mod = await resolver();
  return { component: mod.default, meta: mod.metadata, toc: mod.metadata.toc, slug };
}
