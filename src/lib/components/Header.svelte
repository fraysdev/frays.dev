<script lang="ts">
    import { page } from '$app/state';
    const url = page.url.pathname === "/" ? "" : window.location.pathname

    const links = [
      { label: "home", href: "/" },
      { label: "contact", href: "/contact" },
    ]
</script>

<header>
    <div class="links">
        <a class="website" href="/">
            <div class="logo">
                <img src="/fraysdev.svg" alt="frays.dev logo">
            </div>
            <span class="name">Frays.dev</span>
        </a>
        <div class="fill"></div>
        <nav aria-label="Primary">
            <ul>
                {#each links as link}
                    <li><a class="mono" href={link.href}>/{link.label}</a></li>
                {/each}
            </ul>
        </nav>
    </div>
    <div class="shell">
        franky@frays.dev:~{url}$ <span class="cursor">_</span>
    </div>
</header>

<style>
    header {
        border-bottom: 1px dashed var(--color-border);
    }

    .shell {
        background-color: var(--color-bg-muted);
        padding: 4px 8px;

        font-family: var(--font-mono);
        font-size: .9rem;
    }

    .cursor {
        animation: blink 1s step(1) infinite;
    }

    @keyframes blink {
      50% { opacity: 0; }
    }

    .links {
        display: flex;
        align-items: center;
        padding-right: 8px;
    }

    .links .fill {
        flex: 1;
    }

    .website {
        display: flex;
        align-items: center;

        text-decoration: none;
        font-family: var(--font-mono);
    }

    .website .logo {
        background-color: var(--color-bg-muted);
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .website .logo img {
        width: 1rem;
        height: 1rem;
    }

    .website .name {
        /*background: var(--color-primary);
        background: linear-gradient(
            45deg,
            var(--color-primary-muted)   0%,
            var(--color-secondary-muted) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;*/
        padding: 8px;

        font-family: var(--font-mono);
        font-weight: 500;
        color: var(--color-text);
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
        color: var(--color-text);
        transition: color 0.15s ease;
        text-decoration: none;
    }

    nav a:hover,
    nav a:focus-visible {
        color: var(--color-secondary-muted);
    }
</style>
