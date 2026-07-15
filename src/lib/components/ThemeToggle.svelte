<script lang="ts">
    import { onMount } from "svelte";
    import { browser } from "$app/environment";

    let theme = $state("sys");
    let themeText = $derived.by(() => {
      if (theme === "light") return "lgh";
      else if (theme === "dark") return "drk";
      else if (theme === "system") return "sys";
      else return "unk";
    });

    function getStoredTheme() {
      return localStorage.getItem("theme");
    }

    function getSystemTheme() {
      return window.matchMedia('(prefer-color-scheme: dark)').matches
        ? "dark"
        : "light";
    }

    function toggleTheme(event: MouseEvent) {
      if (event.shiftKey) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
        theme = "system";
        return;
      }

      const curr = getStoredTheme() ?? getSystemTheme();
      const next = curr === "dark" ? "light" : "dark";

      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      theme = next;
    }

    onMount(() => {
      theme = getStoredTheme() ?? "sys";
    })
</script>

<button onclick={toggleTheme} title="Change theme. Shift+click to reset to system preference.">
    {themeText}
</button>

<style>
    button {
        background-color: transparent;
        border: 1px solid var(--color-border-alt);
        padding: 1px 4px 0;

        font-family: var(--font-mono);
        font-size: 1em;
        color: var(--color-text);
        transition: color var(--transition-fast);
    }

    button:hover,
    button:focus-visible {
        color: var(--color-link-hover);
    }
</style>
