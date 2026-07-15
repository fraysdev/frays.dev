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
        grid-template-columns:
        1fr
        minmax(var(--sidebar-min), var(--sidebar-width))
        min(var(--content-width), 100%)
        minmax(var(--sidebar-min), var(--sidebar-width))
        1fr;
        margin: 16px auto;
    }

    .layout :global(.sidebar-left) {
        padding: 0 var(--sidebar-padding);
        grid-column: 2;
        grid-row: 1;
    }

    .layout :global(.page-content) {
        grid-column: 3;
        grid-row: 1;
    }

    .layout :global(.sidebar-right) {
        padding: 0 var(--sidebar-padding);
        grid-column: 4;
        grid-row: 1;
    }

    @media (max-width: 1440px) {
        .layout {
            display: grid;
            grid-template-columns: 1fr min(var(--content-width), 100%) 1fr;
            margin: 16px auto;
        }

        .layout :global(.sidebar-left) {
            padding: 0;
        }

        .layout :global(.page-content) {
            grid-column: 2;
        }

        .layout :global(.sidebar-right) {
            padding: 0;
        }
    }
</style>
