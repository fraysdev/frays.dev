<nav id="navbar">
    <div id="navbar-left">
        <Logo />
    </div>

    <div id="navbar-center">
        <a class="link" href="/">Home</a>
        <a class="link" href="/about">About</a>
    </div>

    <div id="navbar-right">
        <a href="https://github.com/FrankyRay"><img class="logo" src="/logo/github.svg" alt="Github logo" /></a>
        <a href="https://twitter.com/frays_csui"><img class="logo" src="/logo/twitter.svg" alt="Twitter logo" /></a>
    </div>
</nav>

<style>
    #navbar {
        display: flex;
        align-items: center;

        padding: .8em 1em;
        background-color: #0000001f;
    }

    #navbar-left,
    #navbar-center,
    #navbar-right {
        display: flex;
        gap: 1em;
    }

    #navbar-center {
        flex-grow: 1;

        display: flex;
        justify-content: center;
    }

    .link {
        color: white;
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
    }

    .logo {
        height: 1em;
        width: auto;
    }
</style>

<script>
    import Logo from "./Logo.svelte";
</script>