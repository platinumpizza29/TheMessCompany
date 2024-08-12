"use client";
import { useRouter } from "next/navigation";
import AdminTable from "~/components/custom/admintable";
import NavbarComp from "~/components/custom/nav";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default function AdminPage() {
  const router = useRouter();
  const handleNewTest = () => {
    router.push("/admin/newtest");
  };

  return (
    <div className="min-h-[100dvh]">
      <NavbarComp />
      <div className="mx-4 space-y-4 md:mx-12 lg:mx-24 xl:mx-48">
        <div className="flex flex-row items-center justify-between">
          <h1 className="scroll-m-20 text-4xl lg:text-4xl">My Tests</h1>
          <Button onClick={handleNewTest}>New Test</Button>
        </div>
        <Separator />
        <AdminTable />
      </div>
    </div>
  );
}
