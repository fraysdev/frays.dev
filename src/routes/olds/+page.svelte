<main>
    <header>
        <h1>Welcome to <code class="inline">frays.dev</code></h1>
        <p>That's it to be honest :) | Page still under construction</p>
    </header>
</main>
<div class="joke">
    <Joke />
</div>

<style>
    main {
        padding: .8em 1em;
        height: calc(100% - 6em);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header {
        padding: 1.2em 1.5em;
        background-color: #303030;

        border-radius: 16px;
        border: 1px solid white;
    }

    h1, p {
        margin: 0;
        text-align: center;
    }
    
    code {
        font-family: "Geist Mono", monospace;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }

    .joke {
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<script lang="ts">
    import type { PageData } from './$types';
    import Joke from '$lib/components/useless/Joke.svelte';

    let { data }: { data: PageData } = $props();
</script>
