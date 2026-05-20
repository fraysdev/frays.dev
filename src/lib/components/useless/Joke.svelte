<script lang="ts">
    const jokeList = [
        "0.1 + 0.2 = 0.30000000000000004",
        'Also check my other website at <a href="http://localhost:8080">http://localhost:8080</a>',
        "Do <code>sudo rm -rf --no-preserve-root /</code>",
        "<code>Exception in thread &quot;main&quot; java.lang.NullPointerException</code>",
        "<code>git push --force origin life</code>",
        "Java : Javascript == Car : Carpet",
        "Ruby on Rails? Rails on Ruby?",
        "How to exit vim?",
        "I use Arch Linux btw!",
        '<code>[] == ![] </code><code class="comment">// true</code>',
        "What's programmer favorite fruit? ('b' + 'a' + + 'a' + 'a').toLowerCase()",
        'Best shortcut for Windows: <kbd><img src="/key/windows.png" /> + Ctrl + Shift + Alt + L</kbd>',
        "This entire web was written with Vibes Coding.<br/><b>Do try this at home!</b>",
    ];

    const joke = jokeList[Math.floor(Math.random() * jokeList.length)];
</script>

<div id="joke">{@html joke}</div>

<style>
    :global(code) {
        color: white;
        font-family: "Input Mono", monospace;
        font-optical-sizing: auto;
    }

    :global(a) {
        color: white;
        text-decoration: white wavy underline;
    }

    :global(kbd) {
        border: 1px solid white;
        box-shadow: 2px 2px 0 0 white;
        padding: 2px 4px;
        min-width: 0.8em;

        font-family: "Input Mono", monospace;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        font-size: 0.8em;
    }

    :global(img) {
        height: 0.8em;
        width: auto;
    }

    :global(.comment) {
        opacity: 0.6;
    }
</style>
