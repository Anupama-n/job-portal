import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';  
import { Button } from '@/components/ui/button'; 

const CompanyCreate = () => {
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
            {/* Company Name Input */}
            <div>
              <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                Company Name
              </Label>
              <Input
                id="companyName"
                type="text"
                className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                placeholder="Microsoft, JobOrbit ..."
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <Button
                onClick={() => console.log('Submit Company')}
                className="w-full py-3 bg-[#9B59B6] hover:bg-[#7A3C8E] text-white rounded-md text-lg"
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
