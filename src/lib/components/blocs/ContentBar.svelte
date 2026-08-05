<script lang="ts">
    import type { TableOfContent as TOC } from "$lib/types";
    import TableOfContents from "./TableOfContents.svelte";
    import BlogSidebar from "./BlogSidebar.svelte";
    import { getAllBlogs } from "$lib/blog";

    let { currentPage , toc = [] }: { currentPage: string, toc: TOC[] } = $props();
    const blogs = getAllBlogs();

    let currentHeaderId = $state("");
    let currentHeader = $state("");
    let toggleSidebar = $state(false);
    let toggleToc = $state(false);

    $effect(() => {
        const headingEls = toc
            .map((h) => document.getElementById(h.id))
            .filter((el) => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) {
                  currentHeaderId = visible.target.id;
                  currentHeader = visible.target.textContent;
                }
            },
            { rootMargin: '0px 0px -70% 0px' } // trigger near top of viewport
        );

        headingEls.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    });

    function showSidebar() {
      if (toggleToc) toggleToc = false;
      toggleSidebar = !toggleSidebar;
    }

    function showToc() {
      if (toggleSidebar) toggleSidebar = false;
      toggleToc = !toggleToc;
    }
</script>

<div class="sidebar-left">
    <BlogSidebar lists={blogs} current={currentPage} show={toggleSidebar} />
</div>

<div class="sidebar-right">
    <TableOfContents lists={toc} current={currentHeaderId} show={toggleToc} />
</div>

<div class="mobile-area-bar">
    <BlogSidebar lists={blogs} current={currentPage} show={toggleSidebar} />
    <TableOfContents lists={toc} current={currentHeaderId} show={toggleToc} />

    <div class="mobile-bar">
        <button onclick={showSidebar} title="Change theme. Shift+click to reset to system preference.">
            sdb
        </button>
        <span>{currentHeader || "Table of Contents"}</span>
        <button onclick={showToc} title="Change theme. Shift+click to reset to system preference.">
            toc
        </button>
    </div>
</div>

<style>
    .mobile-area-bar {
        display: none;
    }

    @media (max-width: 1440px) {
        .mobile-area-bar {
            display: block;
            max-width: 430px;
            width: 100vw;

            position: fixed;
            bottom: 16px;
            right: 16px;
        }

        .mobile-area-bar :global(.blog-sidebar),
        .mobile-area-bar :global(.docs-sidebar),
        .mobile-area-bar :global(.table-of-contents) {
            display: none;
            max-height: var(--sidebar-heigh);
            max-width: 466px;
            margin-bottom: 8px;
        }

        .mobile-area-bar :global(.blog-sidebar.show),
        .mobile-area-bar :global(.docs-sidebar.show),
        .mobile-area-bar :global(.table-of-contents.show) {
            display: block;
        }

        .mobile-bar {
            background-color: var(--color-bg);
            border: 1px solid var(--color-border);
            height: 32px;

            display: flex;
            align-items: center;
            gap: 8px;
        }

        .mobile-bar button {
            height: 32px;
        }

        .mobile-bar span {
            flex: 1;
        }
    }

    @media (max-width: 430px) {
        .mobile-area-bar :global(.blog-sidebar.show),
        .mobile-area-bar :global(.docs-sidebar.show),
        .mobile-area-bar :global(.table-of-contents.show) {
            border-left: 0;
            border-right: 0;
        }

        .mobile-area-bar {
            border-left: 0;
            border-right: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }
    }
</style>
