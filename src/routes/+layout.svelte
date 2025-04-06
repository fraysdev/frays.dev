<svelte:head>
    <title>Home | frays.dev</title>
    <link rel="shortcut icon" href="/frays-dev.png" type="image/x-icon">
</svelte:head>

<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import Navbar from '$lib/components/Navbar.svelte';
    import "$lib/styles/fonts.css";

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<style>
    :global(body) {
        height: 100vh;
        margin: 0;
        background-color: #202020;

        color: white;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
    }
</style>

<Navbar />
{@render children()}