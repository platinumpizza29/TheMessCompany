import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(): Promise<Response> {
  try {
    //get all the tests with the users analysis
    const alltest = await prisma.test.findMany({
      include: {
        analysis: true,
        student: true,
      },
    });
    if (alltest.length === 0) {
      return new Response(JSON.stringify({ message: "No test found yet!" }), {
        status: 200,
      });
    }
    return new Response(JSON.stringify({ message: "OK", alltest: alltest }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
