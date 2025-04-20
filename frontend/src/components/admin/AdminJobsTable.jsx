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
import { Edit2 } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminJobsTable = () => {
  const navigate = useNavigate();

  const companies = useSelector((store) => store.job?.companies || []);
  const searchjobByText = useSelector(
    (store) => store.job?.searchjobByText || ""
  );
  const allAdminJobs = useSelector((store) => store.job?.allAdminJobs || []);

  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    console.log(allAdminJobs); 
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!searchjobByText) return true;
      return job?.name?.toLowerCase().includes(searchjobByText.toLowerCase());
    });
    if (JSON.stringify(filteredJobs) !== JSON.stringify(filterJobs)) {
      setFilterJobs(filteredJobs);
    }
  }, [allAdminJobs, searchjobByText, filterJobs]); 

  return (
    <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto border border-gray-300">
      <Table className="w-full">
        <TableCaption className="text-gray-500 text-sm mb-4">
          Posted Jobs
        </TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="py-3 px-4 text-left text-sm text-gray-700 font-medium">
              Company Name
            </TableHead>
            <TableHead className="py-3 px-4 text-left text-sm text-gray-700 font-medium">
              Role
            </TableHead>
            <TableHead className="py-3 px-4 text-left text-sm text-gray-700 font-medium">
              Date
            </TableHead>
            <TableHead className="py-3 px-4 text-right text-sm text-gray-700 font-medium">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500 py-6">
                You haven't posted any jobs yet.
              </TableCell>
            </TableRow>
          ) : (
            filterJobs.map((job) => (
              <TableRow key={job._id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="py-3 px-4">{job.company?.name || "No company"}</TableCell>
                <TableCell className="py-3 px-4">{job.title}</TableCell>
                <TableCell className="py-3 px-4">
                  {new Date(job.createdAt.split("T")[0]).toLocaleDateString()}
                </TableCell>
                <TableCell className="py-3 px-4 text-right space-x-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon" className="cursor-pointer">
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-28 p-2 text-sm">
                      <div
                        className="cursor-pointer hover:text-[#9B59B6] font-semibold"
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
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

export default AdminJobsTable;
