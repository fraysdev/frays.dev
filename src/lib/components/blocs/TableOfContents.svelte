<script lang="ts">
    import type { TableOfContent } from "$lib/types";

    let { lists = [], current, show = false }: {
      lists: TableOfContent[],
      current: string,
      show: boolean } = $props();

</script>

<nav class:show class="table-of-contents">
    <div class="title">
        In this page
    </div>
    <ul>
        {#each lists as item (item.id)}
            <a class:active={item.id === current} href="#{item.id}">
                <li style="--depth: {item.depth}">
                    {item.text}
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
        padding: 4px 8px 4px calc((var(--depth) - 2) * 1rem + 8px);
        line-height: 1.5;
    }

    nav a {
        text-decoration: none;
    }

    nav a.active li {
        background: var(--color-bg-muted);
        color: var(--color-link);
    }

    nav a:hover li,
    nav a:focus-visible li {
        background: var(--color-bg-muted-alt);
        color: var(--color-link-hover-alt);
    }
</style>
