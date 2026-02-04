import { z } from "zod";

export const schema = z.object({
  name: z.string().nonempty("Name is required"),
  qualification: z.string().nonempty("Qualification is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Contact must be 10 digit "),
  role: z.string().nonempty("Role is required"),
});

export type InputValues = z.infer<typeof schema>;
