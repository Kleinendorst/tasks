<script lang="ts">
	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<div class="m-2">
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
</div>
<div class="m-2">
	{#if data.userName}
		<p>You are logged in as: {data.userName}</p>

		<form method="post" action="?/signOut" use:enhance>
			<Button type="submit">Sign Out</Button>
		</form>
	{:else}
		<p>You are not logged in, log in <a href={resolve('/auth/login')}>here</a></p>
	{/if}
</div>
