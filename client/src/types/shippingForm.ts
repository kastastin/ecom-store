import { z } from "zod";

export const shippingFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Name must be at least 2 characters long." }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Email must be a valid email address." }),

  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required." })
    .regex(/^\d+$/, { message: "Phone number must contain digits only." })
    .min(7, { message: "Phone number must be between 7 and 10 digits." })
    .max(10, { message: "Phone number must be between 7 and 10 digits." }),

  address: z
    .string()
    .trim()
    .min(1, { message: "Address is required." })
    .min(5, { message: "Address must be at least 5 characters long." }),

  city: z
    .string()
    .trim()
    .min(1, { message: "City is required." })
    .min(2, { message: "City must be at least 2 characters long." }),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
