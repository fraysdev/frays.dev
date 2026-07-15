<script lang="ts">
    import { getAllBlogs } from "$lib/blog";

    let { current }: { current: string } = $props();
    let open = $state(false);
    const blogs = getAllBlogs();

    function closeSidebar() {
      open = false;
    }

    function toggleSidebar(event: MouseEvent) {
      event.stopPropagation();
      open = !open;
    }
</script>

<svelte:window onclick={() => open && closeSidebar()} />

<div class="sidebar-left">
    <nav class="sidebar" class:open>
        <div class="title">
            Blog posts
        </div>
        <ul>
            {#each blogs as blog (blog.slug)}
                <a class:current={blog.slug === current} href={blog.slug}>
                    <li>
                        {blog.title}
                    </li>
                </a>
            {/each}
        </ul>
    </nav>
    <button class="sidebar-button" onclick={toggleSidebar}>
        blog
    </button>
</div>

<style>
    .sidebar {
        position: sticky;
        top: 16px;
        align-self: start;

        background: var(--color-bg);
        border: 1px solid var(--color-border);
        /*padding: 8px;*/
    }

    .sidebar .title {
        text-transform: uppercase;
        font-family: var(--font-display);
        padding: 8px;
        border-bottom: 1px dashed var(--color-border);
    }

    .sidebar ul {
        list-style-type: none;
        padding-inline-start: 0;
    }

    .sidebar li {
        padding: 4px 8px;
        line-height: 1.5;
    }

    .sidebar a.current li {
        /*border-left: 2px solid var(--color-accent);*/
        background: var(--color-bg-muted);
        color: var(--color-link);
    }

    .sidebar a {
        text-decoration: none;
    }

    .sidebar a:hover li,
    .sidebar a:focus-visible li {
        background: var(--color-bg-muted-alt);
        color: var(--color-link-hover-alt);
    }

    .sidebar-button {
        display: none;
    }

    @media (max-width: 1440px) {
        .sidebar-left {
            position: fixed;
            bottom: 16px;
            left: 16px;
            width: var(--sidebar-width);
        }

        .sidebar {
            display: none;
        }

        .sidebar.open {
            display: block;
            width: calc(var(--sidebar-width) - 2px);
            margin-bottom: 4px;
        }

        .sidebar-button {
            display: block;
            background-color: var(--color-bg-muted);
            border: 1px solid var(--color-border-alt);
            /*padding: 1px 4px 0;*/

            font-family: var(--font-mono);
            font-size: 1em;
            color: var(--color-text);
            transition: color var(--transition-fast);
        }

        .sidebar-button:hover,
        .sidebar-button:focus-visible {
            color: var(--color-link-hover);
        }
    }
</style>
