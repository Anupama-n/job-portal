import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { debounce } from "lodash";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleInputChange = debounce((value) => {
    dispatch(setSearchJobByText(value));  
  }, 500);  


  const onInputChange = (e) => {
    setInput(e.target.value);
    handleInputChange(e.target.value);  
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white shadow-md p-6 rounded-2xl border">
          <Input
            className="w-full sm:w-1/2"
            placeholder="Filter by name"
            onChange={onInputChange} 
            value={input}
          />
          <Button className="bg-[#9B59B6] hover:bg-[#7A3C8E]" onClick={() => navigate("/admin/companies/create")}>
            New Jobs
          </Button>
        </div>

        <div className="mt-8">
          <AdminJobsTable />
        </div>
      </div>
    </div>
  );
};

export default AdminJobs;
