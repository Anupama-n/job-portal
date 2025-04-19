import React, { useEffect, useState } from "react";

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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const navigate = useNavigate();

 
  const companies = useSelector((store) => store.company?.companies || []);
  const searchCompanyByText = useSelector(
    (store) => store.company?.searchCompanyByText || ""
  );

  const [filterCompany, setFilterCompany] = useState(companies);


  useEffect(() => {
    const filteredCompany =
      companies.length > 0
        ? companies.filter((company) => {
            if (!searchCompanyByText) return true;
            return company?.name
              ?.toLowerCase()
              .includes(searchCompanyByText.toLowerCase());
          })
        : [];

    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

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
          {filterCompany.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500 py-6">
                You haven't registered any companies yet.
              </TableCell>
            </TableRow>
          ) : (
            filterCompany.map((company) => (
              <TableRow key={company._id}>
                <TableCell>
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={company.logo || "https://via.placeholder.com/100"} // ✅ use correct logo field
                      alt="Company Logo"
                    />
                    <AvatarFallback>CI</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>
                  {new Date(company.createdAt.split("T")[0]).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon" className="cursor-pointer">
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-28 p-2 text-sm">
                      <div
                        className="cursor-pointer hover:text-[#9B59B6]"
                        onClick={() => navigate(`/admin/companies/${company._id}`)}
                      >
                        Edit
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
