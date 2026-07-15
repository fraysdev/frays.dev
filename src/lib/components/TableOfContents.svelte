<script lang="ts">
    import type { TableOfContent } from "$lib/types";

    let { toc = [] }: { toc: TableOfContent[] } = $props();
    let activeId = $state("");
    let open = $state(false);

    $effect(() => {
        const headingEls = toc
            .map((h) => document.getElementById(h.id))
            .filter((el) => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) activeId = visible.target.id;
            },
            { rootMargin: '0px 0px -70% 0px' } // trigger near top of viewport
        );

        headingEls.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    });

    function closeToc() {
      open = false;
    }

    function toggleToc(event: MouseEvent) {
      event.stopPropagation();
      open = !open;
    }
</script>

<svelte:window onclick={() => open && closeToc()} />

<div class="sidebar-right">
    <nav class="toc" class:open>
        <div class="title">
            In this page
        </div>
        <ul>
            {#each toc as item (item.id)}
                <a class:active={item.id === activeId} href="#{item.id}">
                    <li style="--depth: {item.depth}">
                        {item.text}
                    </li>
                </a>
            {/each}
        </ul>
    </nav>
    <button class="toc-button" onclick={toggleToc}>
        toc
    </button>
</div>

<style>
    .toc {
        position: sticky;
        top: 16px;
        align-self: start;

        background: var(--color-bg);
        border: 1px solid var(--color-border);
        /*padding: 8px;*/
    }

    .toc .title {
        text-transform: uppercase;
        font-family: var(--font-display);
        padding: 8px;
        border-bottom: 1px dashed var(--color-border);
    }

    .toc ul {
        list-style-type: none;
        padding-inline-start: 0;
    }

    .toc li {
        padding: 4px 8px 4px calc((var(--depth) - 2) * 1rem + 8px);
        line-height: 1.5;
    }

    .toc a.active li {
        background: var(--color-bg-muted);
        color: var(--color-link);
    }

    .toc a {
        text-decoration: none;
    }

    .toc a:hover li,
    .toc a:focus-visible li {
        background: var(--color-bg-muted-alt);
        color: var(--color-link-hover-alt);
    }

    .toc-button {
        display: none;
    }

    @media (max-width: 1440px) {
        .sidebar-right {
            position: fixed;
            bottom: 16px;
            right: 16px;
            width: var(--sidebar-width);
        }

        .toc {
            display: none;
        }

        .toc.open {
            display: block;
            width: calc(var(--sidebar-width) - 2px);
            margin-bottom: 4px;
        }

        .toc-button {
            display: block;
            margin-left: auto;
            background-color: var(--color-bg-muted);
            border: 1px solid var(--color-border-alt);
            /*padding: 1px 4px 0;*/

            font-family: var(--font-mono);
            font-size: 1em;
            color: var(--color-text);
            transition: color var(--transition-fast);
        }

        .toc-button:hover,
        .toc-button:focus-visible {
            color: var(--color-link-hover);
        }
    }
</style>
