<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		FieldGroup,
		Field,
		FieldLabel,
		FieldDescription
	} from '$lib/components/ui/field/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
	<Card.Root class="mx-auto w-full max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Login</Card.Title>
			<Card.Description>Enter your email below to login to your account</Card.Description>
		</Card.Header>
		<Card.Content>
			<form>
				<FieldGroup>
					<Field>
						<FieldLabel for="email">Email</FieldLabel>
						<Input id="email" type="email" placeholder="mail@example.com" required />
					</Field>
					<Field>
						<div class="flex items-center">
							<FieldLabel for="password">Password</FieldLabel>
							<a href="##" class="ms-auto inline-block text-sm underline">
								Forgot your password?
							</a>
						</div>
						<Input id="password" type="password" required />
					</Field>
					<Field>
						<Button type="submit" class="w-full">Login</Button>
						<FieldDescription class="text-center">
							Don't have an account? <a href="##">Sign up</a>
						</FieldDescription>
					</Field>
				</FieldGroup>
			</form>
		</Card.Content>
	</Card.Root>
</div>
