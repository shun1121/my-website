import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Must be 1 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(1, { message: "Must be more 1 or more characters long" })
    .max(200, { message: "Must be less than 200 characters long" }),
});

export type Schema = z.infer<typeof schema>;
