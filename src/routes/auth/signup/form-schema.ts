import { z } from 'zod';

const passwordSchema = z
	.string()
	.min(8, 'Invalid password: should be at least 8 characters.')
	.max(50, 'Invalid password: should be at most 50 characters.');

export const formSchema = z
	.object({
		fullName: z
			.string()
			.min(3, 'Invalid name: it should be at least 3 characters.')
			.regex(/^[a-zA-Z]+(?: [a-zA-Z]+)+$/, 'Invalid name: it should contain at least a space.'),
		email: z.email(),
		password: passwordSchema,
		passwordConfirm: passwordSchema
	})
	// Thanks to: https://stackoverflow.com/a/73697538
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'Invalid Confirm Password: passwords did not match.',
				path: ['passwordConfirm']
			});
		}
	});

export type FormSchema = typeof formSchema;
