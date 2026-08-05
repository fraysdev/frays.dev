<script lang="ts">
    import "$lib/css/post.css";
    import type { PageData } from "./$types";
    import Content from "$lib/components/Content.svelte";
    import ContentBar from "$lib/components/blocs/ContentBar.svelte";

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>{data.meta.title} — BLOCS Frays.dev</title>
</svelte:head>

<Content>
    <article>
        <header class="post-header">
            <h2>{data.meta.title}</h2>
            <p>{data.meta.subtitle}</p>
            <div class="post-info">
                <span class="post-author">by {data.meta.author}</span>
                <time>{data.meta.date}</time>
                {#each data.meta.tags as tag}
                    <span class="post-tag">#{tag}</span>
                {/each}
            </div>
        </header>

        <div class="post-content">
            <data.component />
        </div>
    </article>
</Content>
<ContentBar currentPage={data.slug} toc={data.toc} />

<style>
    .post-header {
        display: block;
        background-color: var(--color-bg-muted-alt);
        padding: 8px;
    }

    .post-header time {
        font-weight: 300;
    }

    .post-header .post-info {
        display: flex;
        gap: 8px;
    }

    .post-header .post-author {
        font-family: var(--font-display);
        font-weight: 500;
    }

    .post-header .post-tag {
        color: var(--color-secondary-400);
    }
</style>
