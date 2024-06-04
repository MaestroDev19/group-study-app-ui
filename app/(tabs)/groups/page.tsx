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
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Explore() {
return (
    <Card>
        <CardHeader>
            <CardTitle>Study Groups</CardTitle>
            <CardDescription>
                Find the right group for you
            </CardDescription>
        </CardHeader>
        <header className="sticky w-full justify-center top-0 z-30 px-6 flex h-14 items-center gap-4 bg-background sm:static sm:h-auto sm:bg-transparent">
                <div className="relative flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                    type="search"
                    placeholder="Search Groups..."
                    className="w-full rounded-full bg-background pl-8 md:w-[200px] lg:w-[1080px]"
                    />
                </div>
        </header>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px] sm:table-cell">
                            <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="sm:table-cell">
                            <Image
                                alt="Group image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="/placeholder.svg"
                                width="64"
                            />
                        </TableCell>
                        <TableCell className="font-medium">
                            Introduction to Programming Study Group
                            <div className="text-xs text-muted-foreground">
                                Computer Science
                                <br />
                                Members: 10
                                <br />
                                Public
                            </div>
                        </TableCell>
                        <TableHead>
                            <Button>Join</Button>
                        </TableHead>
                    </TableRow>
                    <TableRow>
                        <TableCell className="sm:table-cell">
                            <Image
                                alt="Group image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="/placeholder.svg"
                                width="64"
                            />
                        </TableCell>
                        <TableCell className="font-medium">
                            Data Structures and Algorithms Study Group
                            <div className="text-xs text-muted-foreground">
                                Computer Science
                                <br />
                                Members: 15
                                <br />
                                Private
                            </div>
                        </TableCell>
                        <TableHead>
                            <Button>Join</Button>
                        </TableHead>
                    </TableRow>
                    <TableRow>
                        <TableCell className="sm:table-cell">
                            <Image
                                alt="Group image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="/placeholder.svg"
                                width="64"
                            />
                        </TableCell>
                        <TableCell className="font-medium">
                            Midterm Study Group
                            <div className="text-xs text-muted-foreground">
                                Mathematics
                                <br />
                                Members: 5
                                <br />
                                Public
                            </div>
                        </TableCell>
                        <TableHead>
                            <Button>Join</Button>
                        </TableHead>
                    </TableRow>
                    <TableRow>
                        <TableCell className="sm:table-cell">
                            <Image
                                alt="Group image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="/placeholder.svg"
                                width="64"
                            />
                        </TableCell>
                        <TableCell className="font-medium">
                            Public Speaking Study Group
                            <div className="text-xs text-muted-foreground">
                                Communication
                                <br />
                                Members: 8
                                <br />
                                Private
                            </div>
                        </TableCell>
                        <TableHead>
                            <Button>Join</Button>
                        </TableHead>
                    </TableRow>
                    <TableRow>
                        <TableCell className="sm:table-cell">
                            <Image
                                alt="Group image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="/placeholder.svg"
                                width="64"
                            />
                        </TableCell>
                        <TableCell className="font-medium">
                            All things React Study Group
                            <div className="text-xs text-muted-foreground">
                                Computer Science
                                <br />
                                Members: 12
                                <br />
                                Public
                            </div>
                        </TableCell>
                        <TableHead>
                            <Button>Join</Button>
                        </TableHead>
                    </TableRow>
                    <TableRow>
                        <TableCell className="sm:table-cell">
                            <Image
                                alt="Group image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="/placeholder.svg"
                                width="64"
                            />
                        </TableCell>
                        <TableCell className="font-medium">
                            Omo
                            <div className="text-xs text-muted-foreground">
                                Computer Science
                                <br />
                                Members: 3
                                <br />
                                Private
                            </div>
                        </TableCell>
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
