export interface AdminTable {
  message: string;
  alltest: Alltest[];
}

export interface Alltest {
  id: number;
  studentId: number;
  testName: string;
  testDesc: string;
  testResult: string;
  testDate: Date;
  analysis: null;
  student: Student;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  schoolId: number;
}
