// give me zod types for a user

import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.string(),
  schoolId: z.number(),
});

type User = z.infer<typeof userSchema>;

//loginUser
export const loginUserSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginUser = z.infer<typeof loginUserSchema>;

//register a user
export const registerUserSchema = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.string(),
  schoolId: z.number(),
});

type RegisterUser = z.infer<typeof registerUserSchema>;

const registerUserResponse = z.object({
  role: z.string(),
  token: z.string(),
});

type RegisterUserResponse = z.infer<typeof registerUserResponse>;

export type { User, LoginUser, RegisterUser, RegisterUserResponse };
