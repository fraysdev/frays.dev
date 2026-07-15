import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { getBlog } from "$lib/blog";

export const load: PageLoad = async ({ params }) => {
  const post = await getBlog(params.slug);
  if (!post) throw error(404, "Post not found");
  return post;
};
