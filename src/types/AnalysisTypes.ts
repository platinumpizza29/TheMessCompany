// Define the types based on the structure of your data
interface Student {
  id: number;
  name: string;
  email: string;
  password: string; // Assuming this is hashed
  role: "STUDENT" | "TEACHER" | "ADMIN";
  schoolId: number | null;
}

interface Analysis {
  id: number;
  testId: number;
  studentId: number;
  symptoms: string[];
  duration: string;
  severity: string;
  recommendations: string[];
  therapistNotes: string;
  student: Student;
  test: {
    id: number;
    studentId: number;
    testName: string;
    testDesc: string;
    testResult: string;
    testDate: string; // ISO date string
  };
}

interface TestData {
  id: number;
  studentId: number;
  testName: string;
  testDesc: string;
  testResult: string;
  testDate: string; // ISO date string
  analysis: Analysis | null;
  student: Student;
}

export type { Student, Analysis, TestData };
