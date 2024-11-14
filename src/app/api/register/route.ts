// app/api/login/route.ts
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { type User } from "~/types/userTypes";

const prisma = new PrismaClient();

export async function POST(request: Request): Promise<Response> {
  // Parse the incoming JSON request body
  const { email, password, name } = (await request.json()) as User;
  // Perform authentication logic here
  try {
    //check if the user exist or not
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      //hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      //create a new user
      const newUser = await prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
          role: "STUDENT",
          schoolId: 1,
          name: name,
        },
      });
      // Generate a JWT token for the new user
      const userId = newUser.id.toString();
      const token = jwt.sign({ userId: userId }, "secret", { expiresIn: "1h" });
      return new Response(
        JSON.stringify({
          token,
          role: newUser.role,
        }),
        { status: 200 },
      );
    }
    // If user exists, return an error
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 400,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return new Response(JSON.stringify({ error: "Failed to register user" }), {
      status: 500,
    });
  }
}
