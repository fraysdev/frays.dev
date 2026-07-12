import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

const config = {
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter(),
  }
}

export default config;
