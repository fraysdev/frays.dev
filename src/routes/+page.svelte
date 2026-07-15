<script lang="ts">
    import Content from "$lib/components/Content.svelte"
</script>

<svelte:head>
    <title>Home — Frays.dev</title>
</svelte:head>

<Content>
    <div class="intro-wrapper">
        <div class="intro">
            <h1>Hello, world!</h1>
            <p>I'm Franky Raymarcell Sinaga. You can call me Franky. I am Undergraduate Computer Science Student at Universitas Indonesia.</p>
            <p>I love programming and tinkering anything. I also love Open Source so much. I've made countless project that never finished :D.</p>
        </div>
        <div class="profile-picture">
            No suitable image yet :v
        </div>
    </div>
</Content>

<style>
    p {
        padding-bottom: 0;
    }

    .intro-wrapper {
        display: flex;
        align-items: center;
        padding: 8px;
    }

    .intro-wrapper .intro {
        flex: 1;
    }

    .intro-wrapper .profile-picture {
        background: var(--color-bg-muted);
        border: 1px solid var(--color-border);
        padding: 4px;
        width: 120px;
        height: 120px;

        display: flex;
        justify-content: center;
        color: var(--color-text-accent);
    }
</style>
