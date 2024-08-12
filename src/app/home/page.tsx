"use client";
import React from "react";
import NavbarComp from "~/components/custom/nav";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Separator } from "~/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Type for the Test object
interface Test {
  id: number;
  studentId: number;
  testName: string;
  testDesc: string;
  testResult: string;
  testDate: string; // ISO date string
}

// Type for the API response
interface ApiResponse {
  test: Test[]; // Array of Test objects
}

export default function Home() {
  const router = useRouter();

  const { data, isError } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      try {
        const response = await axios.get<ApiResponse>("/api/studentTestApi", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  });

  const handleView = (testId: number) => {
    router.push(`/home/${testId}`);
  };

  if (isError) {
    return toast.error("Error fetching data");
  }

  return (
    <div className="min-h-[100dvh] min-w-[100dvw] overflow-auto">
      <NavbarComp />
      <div className="mx-4 space-y-4 md:mx-12 lg:mx-24 xl:mx-48">
        <div className="flex flex-row items-center justify-between">
          <h1 className="scroll-m-20 text-4xl lg:text-4xl">My Tests</h1>
        </div>
        <Separator />
        {data && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.test.map((test) => (
              <Card key={test.id} className="w-full">
                <CardHeader>
                  <CardTitle>{test.testName}</CardTitle>
                  <CardDescription>{test.testDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Result: {test.testResult}</p>
                  <p>Date: {test.testDate}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleView(test.id)}>View</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
