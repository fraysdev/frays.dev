<script lang="ts">
    import type { PageData } from "./$types";
    import Content from "$lib/components/Content.svelte";

    let { data }: { data: PageData } = $props();
</script>

<Content>
    <div class="title">
        <h1>BLOCS: Blog</h1>
        <p>Blog is my way to share my thoughts, knowledge, or find something interest when I'm surfing the internet, building a project, messing up with devices, or doing something.</p>
    </div>
    <div class="posts">
        {#each data.posts as post}
            <a class="post" href={post.slug}>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                <div class="post-info">
                    <time>{post.date}</time>
                    {#each post.tags as tag}
                        <span class="post-tag">#{tag}</span>
                    {/each}
                </div>
            </a>
        {/each}
    </div>
</Content>

<style>
    .title {
        padding: 8px;
        border-bottom: 1px dashed var(--color-border);
    }

    .title p {
        margin-bottom: 0;
    }

    .post {
        display: block;
        padding: 8px;
        background-color: var(--color-bg-muted);
        transition: background-color var(--transition-fast);
    }

    .post:hover,
    .post:focus-visible {
        background-color: var(--color-bg-muted-alt);
    }

    .post time {
        font-weight: 300;
    }

    .post .post-info {
        display: flex;
        gap: 8px;
    }

    .post .post-tag {
        color: var(--color-link-hover);
        transition: color var(--transition-fast);
    }

    .post:hover .post-tag,
    .post:focus-visible .post-tag {
        color: var(--color-link-hover-alt);
    }
</style>
