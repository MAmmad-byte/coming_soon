import z, { email } from "zod";

export const waitlistSchema = z.object({
    email: z.email()
})
export type waitlistFormValues = z.infer<typeof waitlistSchema>