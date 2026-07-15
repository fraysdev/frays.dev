import { defineMDSveXConfig as defineConfig, escapeSvelte } from "mdsvex";
import { createHighlighter } from "shiki";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkTocFm } from "./plugins/remark-toc-fm.js";

const themes = {
  light: "catppuccin-latte",
  dark: "catppuccin-mocha",
};
const langs = ["javascript", "typescript", "shell", "python"];
const highlighter = await createHighlighter({
  themes: Object.values(themes),
  langs: langs,
})

/** @type {import('mdsvex').MdsvexOptions} */
const config = defineConfig({
  extensions: [".md", ".svx"],
  smartypants: { dashes: "oldschool" },
  highlight: {
    highlighter: async (code, lang = "text") => {
      const html = escapeSvelte(highlighter.codeToHtml(code, {
        lang, themes, defaultColor: 'light-dark()',
      }));
      const escaped = html
        .replace(/\\/g, "\\\\") // escape backslashes first
        .replace(/`/g, "\\`") // escape backticks
        .replace(/\$\{/g, "\\${"); // escape template expressions
      return `{@html \`${escaped}\`}`;
    }
  },
  remarkPlugins: [remarkMath, remarkTocFm],
  rehypePlugins: [
    rehypeKatex,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
        content: {
          type: "element",
          tagName: "span",
          properties: { className: ["header-anchor"] },
          children: [{ type: "text", value: "#" }],
        },
      },
    ],
  ],
});

export default config;
