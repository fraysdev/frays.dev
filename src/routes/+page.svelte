<script lang="ts">
    import type { PageData } from "./$types";
    import Logo from "$lib/components/Logo.svelte";
    import Joke from "$lib/components/useless/Joke.svelte";

    let { data }: { data: PageData } = $props();
</script>

<main>
    <div id="social">
        <Logo />
        <a href="https://github.com/fraysdev" target="_blank"
            ><img src="/logo/github.svg" alt="Github website" />/fraysdev</a
        >
        <a href="https://x.com/FraysDev" target="_blank"
            ><img
                src="/logo/twitter.svg"
                alt="X (formerly Twitter) website"
            />/FraysDev</a
        >
    </div>

    <div id="title">Hello, world!</div>
    <div id="subtitle">Welcome to <code id="web-id">frays.dev</code></div>

    <br />
    <div><code>$ whoami</code></div>
    <div><code>FrankyRayMS</code></div>

    <br />
    <div><code>$ echo &quot;$FUN_FACT&quot;</code></div>
    <Joke />
</main>

<style>
    #title {
        font-size: 2em;
        font-family: "Input Mono", monospace;
        font-optical-sizing: auto;
        font-weight: 700;
    }

    #subtitle {
        font-size: 1.2em;
    }

    #social {
        display: flex;
        gap: 1em;
    }

    #social a {
        display: flex;
        align-items: center;
    }

    #web-id {
        padding: 0 0.1em;

        background: #7797c7;
        background: linear-gradient(
            45deg,
            rgba(119, 151, 199, 1) 0%,
            rgba(199, 119, 119, 1) 100%
        );
        /* Required for Chrome, Safari, and newer Edge */
        -webkit-background-clip: text;
        background-clip: text;

        /* Alternative to color: transparent for better support */
        -webkit-text-fill-color: transparent;
        color: transparent;

        font-family: "Input Mono", monospace;
        font-optical-sizing: auto;
        font-weight: 500;
    }

    a img {
        width: 1em;
        height: 1em;
    }
</style>
