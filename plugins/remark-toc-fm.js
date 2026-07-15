/**
 * Remark-TOC-FM
 * Create table of contents and saved it into frontmatter `toc`.
 */

import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";

export function remarkTocFm() {
  return (tree, file) => {
    const slugger = new GithubSlugger();
    const toc = [];

    visit(tree, 'heading', node => {
      const text = toString(node);
      const id = slugger.slug(text);

      toc.push({ text, id, depth: node.depth });
    });

    file.data.fm = { ...(file.data.fm ?? {}), toc };
  }
}
