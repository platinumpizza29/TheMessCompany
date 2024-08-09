"use client"
import AdminTable from "~/components/custom/admintable"
import NavbarComp from "~/components/custom/nav"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"

export default function AdminPage() {
  return (
    <div className="min-h-[100dvh] ">
      <NavbarComp />
      <div className="space-y-4 mx-4 md:mx-12 lg:mx-24 xl:mx-48">
        <div className="flex flex-row justify-between items-center">
          <h1 className="scroll-m-20 text-4xl lg:text-4xl">My Tests</h1>
          <Button>New Test</Button>
        </div>
        <Separator />
        <AdminTable />
      </div>
    </div>
  )
}
