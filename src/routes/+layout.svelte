<script lang="ts">
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";
    import Navbar from "$lib/components/Navbar.svelte";
    import "$lib/styles/fonts.css";

    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<svelte:head>
    <title>Home | frays.dev</title>
    <link rel="shortcut icon" href="/fraysdev.svg" type="image/x-icon" />
</svelte:head>

{@render children()}

<style>
    :global(body) {
        margin: 10vh;
        background-color: #191724;

        color: white;
        font-family: "Input Mono", monospace;
        font-optical-sizing: auto;
    }
</style>
