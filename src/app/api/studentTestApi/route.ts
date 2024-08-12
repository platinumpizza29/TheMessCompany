import {PrismaClient} from "@prisma/client"
import jwt from "jsonwebtoken";


interface Decoded {
    userId: string
    iat: number
    exp: number
}

export async function GET(request: Request): Promise<Response> {

    //get the bearer token from the headers and decrypt it to get the student id
    const token = request.headers.get("authorization")?.split(" ")[1]
    if (!token) {
        return new Response(JSON.stringify({error: "Unauthorized"}), {
            status: 401
        })
    }
    const decoded = jwt.verify(token, "secret") as Decoded
    if (!decoded) {
        return new Response(JSON.stringify({error: "Unauthorized"}), {
            status: 401
        })
    }

    try {
        const prisma = new PrismaClient()


        const test = await prisma.test.findMany({
            where: {
                studentId: Number(decoded.userId)
            },
        })
        return new Response(JSON.stringify({test}), {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({error: "Internal Server Error"}), {
            status: 500
        })
    }
}