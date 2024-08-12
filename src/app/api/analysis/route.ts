import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request): Promise<Response> {
  const { testId } = (await request.json()) as { testId: string };

  try {
    const testData = await prisma.test.findUnique({
      where: {
        id: parseInt(testId),
      },
      include: {
        analysis: true,
        student: true,
      },
    });
    if (testData?.analysis === null) {
      return new Response(JSON.stringify({ message: "No analysis found" }), {
        status: 200,
      });
    }
    return new Response(JSON.stringify(testData), {
      status: 200,
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
