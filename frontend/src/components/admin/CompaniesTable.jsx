import React from "react";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit2 } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const CompaniesTable = () => {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-md p-6 max-w-6xl mx-auto border">
      <Table>
        <TableCaption className="text-gray-500 text-sm mb-4">
          Registered Companies
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="align-middle">
              <div className="flex items-center">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBHyuf_bJCZp8l1H7u1JJDjkaGnv7_N1IAw&s"
                    alt="Company Logo"
                  />
                  <AvatarFallback>CI</AvatarFallback>
                </Avatar>
              </div>
            </TableCell>

            <TableCell>Acme Inc.</TableCell>
            <TableCell>April 19, 2025</TableCell>
            <TableCell className="text-right space-x-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="cursor-pointerad">
                    <Edit2 className="w-4 h-4 text-gray-600" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-28 p-2 text-sm ">
                  <div className="cursor-pointer hover:text-[#9B59B6]">Edit</div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
