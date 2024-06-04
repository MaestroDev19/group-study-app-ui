import Image from "next/image"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Explore() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Groups</CardTitle>
        <CardDescription>
          Find the right group for you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                Introduction to Programming Study Group
              </TableCell>
              <TableHead>
                <Button>Join</Button>
              </TableHead>
             
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                Data Structures and Algorithms Study Group
              </TableCell>
              <TableHead>
                <Button>Join</Button>
              </TableHead>
             
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                Midterm Study Group
              </TableCell>
              <TableHead>
                <Button>Join</Button>
              </TableHead>
             
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                Public Speaking Study Group
              </TableCell>
              <TableHead>
                <Button>Join</Button>
              </TableHead>
            
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                All things React Study Group
              </TableCell>
              <TableHead>
                <Button>Join</Button>
              </TableHead>
             
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">Omo</TableCell>
              <TableHead>
                <Button>Join</Button>
              </TableHead>
            
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> groups
        </div>
      </CardFooter>
    </Card>
  )
}
