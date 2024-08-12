// model Test {
//     id         Int       @id @default(autoincrement())
//     studentId  Int
//     testName   String
//     testDesc   String
//     testResult String
//     testDate   DateTime
//     student    User      @relation(fields: [studentId], references: [id])
//     analysis   Analysis?
//   }

import { type Test, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//handle incoming request for test creation

export async function POST(request: Request): Promise<Response> {
  const { testName, testDesc, testResult, testDate, studentId } =
    (await request.json()) as Test;
  //create a new test
  try {
    const test = await prisma.test.create({
      data: {
        testName: testName,
        testDesc: testDesc,
        testResult: testResult,
        testDate: testDate,
        studentId: studentId,
      },
    });
    if (test) {
      return new Response(JSON.stringify(test), {
        status: 200,
      });
    }
    return new Response(JSON.stringify({ message: "Test not created" }), {
      status: 400,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
