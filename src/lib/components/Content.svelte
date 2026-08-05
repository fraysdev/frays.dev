<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
	let { children } = $props();
</script>

<div class="page-content">
    <Header />
    <div class="content">
        {@render children()}
    </div>
    <Footer />
</div>

<style>
    .content {
        background-color: var(--color-bg);
        border: 1px solid var(--color-border);
        margin: 16px 0;
    }

    @media (max-width: 960px) {
        .content {
            border-left: 0;
            border-right: 0;
        }
    }
</style>
