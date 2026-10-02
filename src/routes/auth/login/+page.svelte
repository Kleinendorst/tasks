<script lang="ts">
	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import {
		Field,
		FieldDescription,
		FieldGroup,
		FieldLabel
	} from '$lib/components/ui/field/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
	<Card.Root class="mx-auto w-full max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Login</Card.Title>
			<Card.Description>Enter your email below to login to your account</Card.Description>
		</Card.Header>
		<Card.Content>
			<form action="?/signInEmail" use:enhance method="post">
				{#if form?.message === 'Invalid email or password'}
					<Alert.Root variant="destructive" class="max-w my-2">
						<CircleAlertIcon />
						<Alert.Title>Invalid login</Alert.Title>
						<Alert.Description>Please try again or signup instead.</Alert.Description>
					</Alert.Root>
				{/if}
				<FieldGroup>
					<Field>
						<FieldLabel for="email">Email</FieldLabel>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="mail@example.com"
							autocomplete="off"
							required
						/>
					</Field>
					<Field>
						<div class="flex items-center">
							<FieldLabel for="password">Password</FieldLabel>
						</div>
						<Input id="password" name="password" type="password" required />
					</Field>
					<Field>
						<Button type="submit" class="w-full">Login</Button>
						<FieldDescription class="text-center">
							Don't have an account? <a href={resolve('/auth/signup')}>Sign up</a>
						</FieldDescription>
					</Field>
				</FieldGroup>
			</form>
		</Card.Content>
	</Card.Root>
</div>
