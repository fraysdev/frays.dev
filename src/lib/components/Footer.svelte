<script lang="ts">
    const links = [
      { label: "github", href: "https://github.com/fraysdev" },
      { label: "twitter", href: "https://twitter.com/frays_csui" },
    ]
</script>

<footer>
    <div class="copyright">
        <div class="text"><span class="symbol">&copy;</span> Franky R Sinaga 2026</div>
        <div class="rev">Last Revision: <time>12 July 2026</time></div>
    </div>
    <div class="links">
        <div class="link-header">Social</div>
        <nav aria-label="Primary">
            <ul>
                {#each links as link}
                    <li><a href={link.href}>{link.label}</a></li>
                {/each}
            </ul>
        </nav>
    </div>
</footer>

<style>
    footer {
        border-top: 1px dashed var(--color-border);
        display: flex;
        align-items: center;
    }

    .copyright {
        padding: 4px 8px;
        flex: 1;
    }

    .copyright .text {
        font-family: var(--font-display);
        font-weight: 500;
    }

    .copyright .rev {
        font-family: var(--font-sans);
        font-weight: 300;
    }

    .links {
        border-left: 1px solid var(--color-border);
        padding: 4px 8px;
    }

    .links .link-header {
        font-family: var(--font-sans);
        font-weight: 500;
    }

    nav ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    nav a {
        font-family: var(--font-mono);
        font-size: .9rem;
        color: var(--color-text);
        text-decoration: none;
        transition: color 0.15s ease;
    }

    nav a:hover,
    nav a:focus-visible {
        color: var(--color-secondary-muted);
    }
</style>
