// formSchema.ts
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.email("Invalid email"),
  age: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      "Age must be greater than 0",
    ),
});
export type EmployeeForm = z.infer<typeof formSchema>;
