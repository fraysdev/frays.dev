<main>
    <h1>About me!</h1>
    <p>
        Hello, I'm Franky. This is just my personal website for my experiment. There's nothing much here for now.
    </p>
</main>

<style>
    main {
        padding: 1em .8em;
    }

    h1, p {
        margin: 0;
    }
</style>

<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>
