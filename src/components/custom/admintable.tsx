import { Button } from "../ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

export default function AdminTable() {
  return (
    <div className="mt-10">
      <Table>
        <TableCaption>A list of your recent test.</TableCaption>
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
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Samarth</TableCell>
            <TableCell>Symbiosis</TableCell>
            <TableCell>Depression Test</TableCell>
            <TableCell className="text-right">
              <Button>View Analysis</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </div>
  )
}
