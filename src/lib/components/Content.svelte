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
    .page-content {
        border: 1px solid var(--color-border);
        background-color: var(--color-bg);
    }
</style>
