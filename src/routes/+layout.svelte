<script lang="ts">
    import "$lib/css/fonts.css";
    import "$lib/css/app.css";

	let { children } = $props();
</script>

<div class="layout">
    {@render children()}
</div>

<style>
    .layout {
        display: grid;
        grid-template-columns: 1fr var(--sidebar-width) min(var(--content-width), 100%) var(--sidebar-width) 1fr;
        column-gap: var(--content-gap);
        margin: 16px auto;
    }

    .layout :global(.sidebar-left) {
        grid-column: 2;
    }

    .layout :global(.page-content) {
        grid-column: 3;
    }

    .layout :global(.sidebar-left) {
        grid-column: 4;
    }
</style>
