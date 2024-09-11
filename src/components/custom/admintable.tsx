"use client";
import {useQuery} from "@tanstack/react-query";
import {Button} from "../ui/button";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "../ui/table";
import axios from "axios";
import {type AdminTable, type Alltest} from "~/types/Admintable";
import {useRouter} from "next/navigation";

export default function AdminTableComponent() {

    const router = useRouter();

    // Type the useQuery hook with the AdminTable interface
    const {data, isLoading, isError} = useQuery<AdminTable>({
        queryKey: ["adminTable"],
        queryFn: async () => {
            const response = await axios.get("/api/admin");
            return response.data as AdminTable;
        },
    });

    const handleAnalysis = (testId: number) => {
        router.push(`/admin/${testId}`);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <div className="mt-10">
            <Table>
                <TableCaption>A list of your recent tests.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Id</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>School</TableHead>
                        <TableHead>Test</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* Check if data is undefined or alltest is undefined */}
                    {!data?.alltest || data.alltest.length === 0 ? (
                        <TableCaption>No recent tests found.</TableCaption>
                    ) : (
                        data.alltest.map((test: Alltest) => (
                            <TableRow key={test.id}>
                                <TableCell className="font-medium">{test.id}</TableCell>
                                <TableCell>{test.student.name}</TableCell>
                                <TableCell>{test.student.schoolId}</TableCell>
                                <TableCell>{test.testName}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" onClick={() => handleAnalysis(test.id)}>View
                                        Analysis</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
