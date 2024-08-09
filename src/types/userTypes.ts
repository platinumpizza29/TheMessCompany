// give me zod types for a user

import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    password: z.string(),
    email: z.string(),
    role: z.string(),
    schoolId: z.number(),
})

type User = z.infer<typeof userSchema>

//loginUser

export const loginUserSchema = z.object({
    email: z.string(),
    password: z.string(),
})

type LoginUser = z.infer<typeof loginUserSchema>


export type {User, LoginUser}
