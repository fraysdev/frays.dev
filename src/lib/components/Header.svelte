<script lang="ts">
    import { page } from '$app/state';
    import ThemeToggle from './ThemeToggle.svelte';

    const urlPath = $derived(page.url.pathname === "/" ? "" : page.url.pathname);

    const links = [
      { label: "home", href: "/" },
      { label: "blog", href: "/blog" },
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
        <ThemeToggle />
    </div>
    <div class="shell">
        franky@frays.dev:~{urlPath}$ <span class="cursor">_</span>
    </div>
</header>

<style>
    header {
        border: 1px solid var(--color-border);
        background-color: var(--color-bg);
    }

    .links {
        display: flex;
        border-bottom: 1px dashed var(--color-border);
        align-items: center;
        padding-right: 8px;
        gap: 8px;
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
        width: 20px;
        height: 20px;
    }

    .website .name {
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
        transition: color var(--transition-fast);
        text-decoration: none;
    }

    nav a:hover,
    nav a:focus-visible {
        color: var(--color-link-hover);
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

    @media (max-width: 960px) {
        header {
            border-left: 0;
            border-right: 0;
        }
    }
</style>
