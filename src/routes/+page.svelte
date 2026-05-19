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
    <div id="subtitle">Welcome to <span id="web-id">frays.dev</span></div>

    <br />
    <div>$ whoami</div>
    <div>FrankyRayMS</div>

    <br />
    <div>$ echo &quot;$FUN_FACT&quot;</div>
    <Joke />
</main>

<style>
    #title {
        font-size: 2em;
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
        background: #7797c7;
        background: linear-gradient(
            45deg,
            rgba(119, 151, 199, 1) 0%,
            rgba(199, 119, 119, 1) 100%
        );
        padding: 0 0.1em;
    }

    a img {
        width: 1em;
        height: 1em;
    }
</style>
