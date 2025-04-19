import React from "react";
import Navbar from "../shared/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";

const Companies = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white shadow-md p-6 rounded-2xl border">
          <Input
            className="w-full sm:w-1/2"
            placeholder="Filter by name"
          />
          <Button className="bg-[#9B59B6] hover:bg-[#7A3C8E]" onClick= {() => navigate("/admin/companies/create")}>
            New Company
          </Button>
        </div>

        <div className="mt-8">
          <CompaniesTable/>
        </div>
      </div>
    </div>
  );
};

export default Companies;
