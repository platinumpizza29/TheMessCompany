// app/api/login/route.ts
import {PrismaClient} from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request): Promise<Response> {
    // Parse the incoming JSON request body
    const {email, password} = (await request.json()) as {
        email: string;
        password: string;
    };
    // Perform authentication logic here
    try {
        //check if the user exist or not
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (!user) {
            return new Response(
                JSON.stringify({error: "Invalid email or password"}),
                {status: 401},
            );
        }
        if (!await bcrypt.compare(password, user.password)) {
            return new Response(
                JSON.stringify({error: "Invalid email or password"}),
                {status: 401},
            );
        }
        // Generate a JWT token
        const userId = user.id.toString();
        const token = jwt.sign({userId: userId}, "secret", {expiresIn: "1h"});
        return new Response(JSON.stringify({token, role: user.role, userId: userId}), {status: 200});
    } catch (error) {
        console.error("Error logging in:", error);
        return new Response(JSON.stringify({error: "Failed to log in"}), {
            status: 500,
        });
    }
}
