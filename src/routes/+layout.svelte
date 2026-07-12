<script lang="ts">
    import "$lib/css/fonts.css";
    import "$lib/css/app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
	let { children } = $props();
</script>

<div class="page">
    <Header />

    <div class="content">
        {@render children()}
    </div>

    <Footer />
</div>

<style>
    .page {
        border: 1px solid var(--color-border);
        background-color: var(--color-bg);
        max-width: 960px;
        margin: 16px auto;
    }

    .content {
        padding: 8px;
    }

    :global(body) {
        background-color: var(--color-bg);
        background-size: 32px 32px;
        background-image:
            linear-gradient(to right, #bbe3e3 1px, transparent 1px),
            linear-gradient(to bottom, #bbe3e3 1px, transparent 1px);
    }

    @media (max-width: 960px) {
        .page {
            border-left: none;
            border-right: none;
        }
    }
</style>
