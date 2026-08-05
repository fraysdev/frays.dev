<script lang="ts">
    import type { BlogFrontmatter } from "$lib/blog";
    import { getAllBlogs } from "$lib/blog";

    let { lists, current, show = false }: {
        lists: (BlogFrontmatter & {slug: string})[],
        current: string,
        show: boolean } = $props();
</script>

<nav class:show class="blog-sidebar">
    <div class="title">
        Blog posts
    </div>
    <ul>
        {#each lists as blog (blog.slug)}
            <a class:current={blog.slug === current} href={blog.slug}>
                <li>
                    {blog.title}
                </li>
            </a>
        {/each}
    </ul>
</nav>

<style>
    nav {
        align-self: start;
        background: var(--color-bg);
        border: 1px solid var(--color-border);
    }

    nav .title {
        text-transform: uppercase;
        font-family: var(--font-display);
        padding: 8px;
        border-bottom: 1px dashed var(--color-border);
    }

    nav ul {
        list-style-type: none;
        padding-inline-start: 0;
    }

    nav li {
        padding: 4px 8px;
        line-height: 1.5;
    }

    nav a.current li {
        /*border-left: 2px solid var(--color-accent);*/
        background: var(--color-bg-muted);
        color: var(--color-link);
    }

    nav a {
        text-decoration: none;
    }

    nav a:hover li,
    nav a:focus-visible li {
        background: var(--color-bg-muted-alt);
        color: var(--color-link-hover-alt);
    }
</style>
