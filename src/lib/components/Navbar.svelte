<nav id="navbar">
    <div id="navbar-left">
        <Logo />
    </div>

    <div id="navbar-center">

    </div>

    <div id="navbar-right">
        <a href="/">Home</a>
        <a href="/about">About</a>
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
    }

    #navbar-right a {
        color: white;
        text-decoration: none;
    }

    #navbar-right a:hover {
        text-decoration: underline;
    }
</style>

<script>
    import Logo from "./Logo.svelte";
</script>