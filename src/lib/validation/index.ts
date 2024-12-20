import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." })
        .refine(value => /^[a-zA-Z]+$/.test(value), {
            message: "Name can only contain alphabets.",
        })
        .refine(value => value.trim().length > 0, {
            message: "Name cannot be empty or just spaces.",
        }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." })
        .refine(value => /^[a-zA-Z0-9]+$/.test(value), {
            message: "Username can only contain alphabets and numbers.",
        })
        .refine(value => value.trim().length > 0, {
            message: "Username cannot be empty or just spaces.",
        }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." })
        .refine(value => /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/.test(value), {
            message: "Password can only contain alphabets, numbers, and special characters.",
        })
        .refine(value => value.trim().length > 0, {
            message: "Password cannot be empty or just spaces.",
        }),
})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." })
        .refine(value => value.trim().length > 0, {
            message: "Password cannot be empty or just spaces.",
        }),
})

export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." })
        .refine(value => /^[a-zA-Z]+$/.test(value), {
            message: "Name can only contain alphabets.",
        })
        .refine(value => value.trim().length > 0, {
            message: "Name cannot be empty or just spaces.",
        }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." })
        .refine(value => /^[a-zA-Z0-9]+$/.test(value), {
            message: "Username can only contain alphabets and numbers.",
        })
        .refine(value => value.trim().length > 0, {
            message: "Username cannot be empty or just spaces.",
        }),
    email: z.string().email(),
    bio: z.string(),
});

export const PostValidation = z.object({
    caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
    file: z.custom<File[]>(),
    location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
    tags: z.string(),
  });