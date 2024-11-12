import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { organization } from "better-auth/plugins"
 
const prisma = new PrismaClient();
export const auth = betterAuth({
    emailAndPassword:{
        enabled: true,
    },
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    plugins: [
        organization() 
    ],
});