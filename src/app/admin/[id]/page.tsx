"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { type TestData } from "~/types/AnalysisTypes";

export default function AnalysisPage() {
  const params = useParams();
  const testId = params.id as string;

  const { data, isLoading, isError, error } = useQuery<TestData>({
    queryKey: ["analysisPage", testId],
    queryFn: async () => {
      const response = await axios.post<TestData>("/api/analysis", {
        testId,
      });
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );

  if (!data) return <div>No data found</div>;

  const { testName, testDesc, testResult, analysis } = data;

  return (
    <div className="min-h-[100dvh] min-w-[100dvw] overflow-auto">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-3xl font-bold">Psychology Test Report</h1>
          <div className="rounded-lg bg-white p-8 shadow-md">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">{testName}</h2>
                <p className="text-muted-foreground">{testDesc}</p>
              </div>
              <div className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground">
                Score: {testResult} {/* You might want to format this */}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-bold">Analysis</h3>
                <div className="space-y-4">
                  {analysis ? (
                    <>
                      <div>
                        <h4 className="text-lg font-medium">Symptoms</h4>
                        <p className="text-muted-foreground">
                          {analysis.symptoms.join(", ")}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Duration</h4>
                        <p className="text-muted-foreground">
                          {analysis.duration}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Severity</h4>
                        <p className="text-muted-foreground">
                          {analysis.severity}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Recommendations</h4>
                        <ul className="list-disc pl-4 text-muted-foreground">
                          {analysis.recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Therapist Notes</h4>
                        <p className="text-muted-foreground">
                          {analysis.therapistNotes}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-muted-foreground">
                      No analysis available.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
