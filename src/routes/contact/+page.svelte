<script lang="ts">
    import Content from "$lib/components/Content.svelte"
</script>

<Content>
    <main>
        <div class="introduction">
            <h1>Contact Social</h1>
            <p>You can check my social link.</p>
            <ul class="social-link">
               	<li>Github: <a href="https://github.com/fraysdev">@fraysdev</a></li>
               	<li>Twitter: <a href="https://twitter.com/frays_csui">@frays_csui</a></li>
            </ul>
        </div>
    </main>
</Content>

<style>
    p {
        padding-bottom: 0;
    }

    main {
        display: flex;
        align-items: center;
        padding: 8px;
    }

    .social-link a {
        font-family: var(--font-mono);
        font-size: .9rem;
    }
</style>
