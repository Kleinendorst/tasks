<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { formSchema } from './form-schema';

	let { data } = $props();

	// The docs don't wrap these with $derived. I believe this is indeed not necessary because in both
	// SSR and CSR cases the page doesn't need an updated instance from the server.
	// svelte-ignore state_referenced_locally
	const form = superForm(data.form, { validators: zod4Client(formSchema) });
	const { form: formData, enhance } = form;
</script>

<div class="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
	<div class="w-full max-w-sm">
		<Card.Root>
			<Card.Header>
				<Card.Title>Create an account</Card.Title>
				<Card.Description>Enter your information below to create your account</Card.Description>
			</Card.Header>
			<Card.Content>
				<form method="POST" use:enhance>
					<Field.Group>
						<Form.Field {form} name="fullName">
							<Form.Control>
								{#snippet children({ props })}
									<Form.Label>Full Name</Form.Label>
									<Input
										{...props}
										bind:value={$formData.fullName}
										placeholder="John Doe"
										required
									/>
								{/snippet}
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
						<Form.Field {form} name="email">
							<Form.Control>
								{#snippet children({ props })}
									<Form.Label>Email</Form.Label>
									<Input
										{...props}
										bind:value={$formData.email}
										placeholder="m@example.com"
										required
									/>
								{/snippet}
							</Form.Control>
							<Form.Description>
								We'll use this to contact you. We will not share your email with anyone else.
							</Form.Description>
							<Form.FieldErrors />
						</Form.Field>
						<Form.Field {form} name="password">
							<Form.Control>
								{#snippet children({ props })}
									<Form.Label>Password</Form.Label>
									<Input
										type="password"
										max="50"
										{...props}
										bind:value={$formData.password}
										required
									/>
								{/snippet}
							</Form.Control>
							<Form.Description>Must be at least 8 characters long.</Form.Description>
							<Form.FieldErrors />
						</Form.Field>
						<Form.Field {form} name="passwordConfirm">
							<Form.Control>
								{#snippet children({ props })}
									<Form.Label>Confirm Password</Form.Label>
									<Input
										type="password"
										max="50"
										{...props}
										bind:value={$formData.passwordConfirm}
										required
									/>
								{/snippet}
							</Form.Control>
							<Form.Description>Please confirm your password.</Form.Description>
							<Form.FieldErrors />
						</Form.Field>
						<Field.Group>
							<Form.Button>Create Account</Form.Button>
							<Field.Description class="px-6 text-center">
								Already have an account? <a href={resolve('/auth/login')}>Sign in</a>
							</Field.Description>
						</Field.Group>
					</Field.Group>
				</form>
			</Card.Content>
		</Card.Root>
	</div>
</div>
