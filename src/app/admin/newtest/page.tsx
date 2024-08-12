"use client";

import { type Test } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { formatDate } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

export default function NewTestPage() {
  const [date, setDate] = useState<Date>();

  const [testName, setTestName] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [result, setResult] = useState("");
  const [testStudent, setTestStudent] = useState("");

  const router = useRouter();

  const { isSuccess, isError, mutate, error } = useMutation({
    //use axios
    mutationKey: ["newTest"],
    mutationFn: async () => {
      const response = await axios.post("/api/test", {
        testName,
        testDesc: testDescription, // Ensure this matches the Prisma model
        testResult: result, // Ensure this matches the Prisma model
        testDate: date, // Ensure this matches the Prisma model
        studentId: parseInt(testStudent),
      });
      console.log(response.data);
      return response.data as Test;
    },
  });

  const submitNewTest = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent default form submission
    mutate();
  };

  //if error then show a toast
  if (isError) {
    return toast.error("Error creating test" + error.message);
  }

  if (isSuccess) {
    router.push("/admin");
  }

  return (
    <div className="min-h-[100dvh] min-w-[100dvw] overflow-auto">
      <div className="mx-4 space-y-6 md:mx-12 lg:mx-24 xl:mx-48">
        <h1 className="mt-10 text-3xl">Create a new test</h1>
        <form>
          {/* give me a form to create a new test */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="testName">Test Name</label>
              <Input
                type="text"
                name="testName"
                id="testName"
                onChange={(e) => setTestName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="testDesc">Test Description</label>
              <Input
                type="text"
                name="testDesc"
                id="testDesc"
                onChange={(e) => setTestDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="testResult">Test Result</label>
              <Input
                type="text"
                name="testResult"
                id="testResult"
                onChange={(e) => setResult(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? formatDate(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="studentId">Student ID</label>
              <Input
                type="text"
                name="studentId"
                id="studentId"
                onChange={(e) => setTestStudent(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button onClick={submitNewTest}>Create Test</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
