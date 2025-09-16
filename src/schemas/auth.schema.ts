import z, { ZodType } from "zod";
import { UserLoginProps } from "./auth.schema";

export type UserRegistrationProps = {
  type: string;
  fullname: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  otp: string;
};

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
  .object({
    type: z.string().min(1),
    fullname: z
      .string()
      .min(2, { message: "Your full name must be atleast 2 characters long" }),
    email: z.string().email({ message: "Incorrect email format!" }),
    confirmEmail: z.string().email(),
    password: z
      .string()
      .min(4, { message: "Your password must be at least 8 characters long" })
      .max(64, {
        message: "Your password cannot be longer than 64 characters long",
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""),
        "password should contain only alphabets and numbers"
      ),
    confirmPassword: z.string(),
    otp: z.string().min(6, { message: "You must enter a 6 digit code" }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((schema) => schema.email === schema.confirmEmail, {
    message: "Your emails do not match!",
    path: ["confirmEmail"],
  });

export type UserLoginProps = {
  email: string;
  password: string;
};

export const UserLoginSchema: ZodType<UserLoginProps> = z.object({
  email: z.string().email({ message: "Incorrect email format!" }),
  password: z
    .string()
    .min(4, { message: "Your password must be at least 8 characters long" })
    .max(64, {
      message: "Your password cannot be longer than 64 characters long",
    })
    .refine(
      (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""),
      "password should contain only alphabets and numbers"
    ),
});
