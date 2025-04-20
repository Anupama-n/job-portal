import React, { useEffect, useState } from "react";
import { Table, TableCaption, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { Edit2, Eye, MoreVertical } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const navigate = useNavigate();

  const searchJobByText = useSelector((store) => store.job?.searchJobByText || ""); 
  const allAdminJobs = useSelector((store) => store.job?.allAdminJobs || []);

  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    console.log("Redux search text:", searchJobByText);
    console.log("All jobs count:", allAdminJobs.length);
    console.log("First few job titles:", allAdminJobs.slice(0, 3).map((job) => job?.title));

    if (!Array.isArray(allAdminJobs)) {
      console.error("allAdminJobs is not an array:", allAdminJobs);
      return;
    }

    // Filter jobs based on search text
    const filteredJobs = allAdminJobs.filter((job) => {
      // If no search text, show all jobs
      if (!searchJobByText.trim()) return true;

      // Ensure we are comparing strings in a case-insensitive way
      const jobTitle = job?.title?.toLowerCase() || "";
      const searchText = searchJobByText.trim().toLowerCase();

      return jobTitle.includes(searchText);
    });

    console.log("Filtered jobs count:", filteredJobs.length);
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto border border-gray-300">
      <Table className="w-full">
        <TableCaption className="text-gray-500 text-sm mb-4">Posted Jobs</TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="py-3 px-4 text-left text-sm text-gray-700 font-medium">Company Name</TableHead>
            <TableHead className="py-3 px-4 text-left text-sm text-gray-700 font-medium">Role</TableHead>
            <TableHead className="py-3 px-4 text-left text-sm text-gray-700 font-medium">Date</TableHead>
            <TableHead className="py-3 px-4 text-right text-sm text-gray-700 font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500 py-6">
                No jobs found matching your criteria.
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
        <Button variant="ghost" size="icon" className="cursor-pointer p-1 rounded-full hover:bg-gray-100">
          <MoreVertical className="w-4 h-4 text-gray-600" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-sm">
      
        <div onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center gap-2 cursor-pointer mt-3 hover:text-[#9B59B6]">
  <Eye className="w-4 h-4 text-gray-600" />
  <span className="text-gray-600">Applicants</span>
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
