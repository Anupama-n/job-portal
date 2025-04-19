import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';  
import { Button } from '@/components/ui/button'; 
import { useNavigate } from 'react-router-dom'; 
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';
import axios from 'axios';
import { toast } from 'sonner'


const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    if (!companyName.trim()) {
      toast.error("Please enter a company name.");
      return;
    }
    
    const loadingToast = toast.loading("Creating company...");
  
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
  
      toast.dismiss(loadingToast);
  
      const { success, message, company } = res.data;
  
      if (success) {
        toast.success(message); 
        dispatch(setSingleCompany(company));
        navigate(`/admin/companies/${company._id}`);
      } else {
        if (message === "Company already exists" && company?._id) {
          toast.error("Company already exists. Redirecting...");
          dispatch(setSingleCompany(company));
          setTimeout(() => {
            navigate(`/admin/companies/${company._id}`);
          }, 2000);
        } else {
          toast.error(message || "Failed to create company.");
        }
      }
    } catch (error) {
      toast.dismiss(loadingToast);
  
      const errMsg = error?.response?.data?.message || "Failed to create company.";
      toast.error(errMsg);
  
      if (process.env.NODE_ENV === "development") {
        console.warn("Backend rejected request:", error.response);
      }
    }
  };
  
  

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h1 className="font-bold text-3xl text-gray-800">Create Your Company</h1>
          <p className="text-gray-600 text-sm">
            What would you like to name your company? You can change this later.
          </p>

          <div className="space-y-4">
            <div>
              <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                Company Name
              </Label>
              <Input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                id="companyName"
                type="text"
                className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                placeholder="Microsoft, JobOrbit ..."
              />
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <Button
                variant="outline"
                className="border border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button
                onClick={registerNewCompany}
                className="bg-[#9B59B6] hover:bg-[#7A3C8E] text-white py-3 px-6 text-lg"
              >
                Create Company
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
