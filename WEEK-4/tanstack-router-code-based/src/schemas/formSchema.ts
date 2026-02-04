import { z } from "zod";

export const formSchema = z.object({
  id: z
    .string()
    .min(1, "ID is required")
    .regex(/^[0-9]+$/, "ID must contain only numbers"),

  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z\s]+$/, "Name must contain only letters"),

  fatherName: z
    .string()
    .min(1, "Father name is required")
    .regex(/^[A-Za-z\s]+$/, "Father name must contain only letters"),

  email: z.email("Invalid email address"),

  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),

  address: z.string().min(5, "Address is required"),

  pan: z.string().regex(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN number"),

  bloodGroup: z.string().min(1, "Blood group is required"),

  accountNumber: z.string().regex(/^[0-9]{9,18}$/, "Invalid account number"),

  ifsc: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code"),

  role: z.string().min(1, "Role is required"),

  joiningDate: z.string().min(1, "Joining date is required"),

  dob: z
    .string()
    .min(1, "Date of birth is required")
    .refine(
      (dateStr) => {
        const year = new Date(dateStr).getFullYear();
        return year < 2005; // born before 2005
      },
      {
        message: "You must be born before 2005",
      },
    ),

  gender: z
    .string()
    .min(1, "Gender is required")
    .refine((val) => ["male", "female", "other"].includes(val), {
      message: "Invalid gender",
    }),

  qualification: z.string().min(1, "Qualification is required"),
});
export type EmployeeFormValidation = z.infer<typeof formSchema>;
