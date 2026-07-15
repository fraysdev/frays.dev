import type { PageServerLoad } from "./$types";
import { getAllBlogs } from "$lib/blog";

export const load: PageServerLoad = () => {
  return { posts: getAllBlogs() };
}
