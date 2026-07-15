<script lang="ts">
	import { page } from '$app/state';
	import Content from "$lib/components/Content.svelte";
</script>

<Content>
    <div class="error">
        <h1>Error</h1>
        <p>Page is not found or something wrong.</p>
    </div>
</Content>

<style>
    .error {
        padding: 8px;
    }
</style>
