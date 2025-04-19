import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

const CompanySetup = () => {
  const navigate = useNavigate();
  const { singleCompany } = useSelector((store) => store.company);

  const [input, setInput] = useState({
    name: '',
    description: '',
    website: '',
    location: ''
  });

  const [logo, setLogo] = useState(null);
  const params = useParams();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (logo) {
      formData.append("file", logo);
    }

    try {
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    if (singleCompany) {
      setInput({
        name: singleCompany.name || '',
        description: singleCompany.description || '',
        website: singleCompany.website || '',
        location: singleCompany.location || ''
      });
    }
  }, [singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h1 className="font-bold text-3xl text-gray-800">Company Setup</h1>
          <p className="text-gray-600 text-sm">
            Complete the details to set up your company profile.
          </p>

          <div className="space-y-4">
            {/* Company Name */}
            <div>
              <Label htmlFor="name">Company Name</Label>
              <Input
                value={input.name}
                onChange={changeEventHandler}
                name="name"
                id="name"
                type="text"
                placeholder="Enter company name"
              />
            </div>

            {/* Company Description */}
            <div>
              <Label htmlFor="description">Company Description</Label>
              <Input
                value={input.description}
                onChange={changeEventHandler}
                name="description"
                id="description"
                type="text"
                placeholder="Describe your company..."
              />
            </div>

            {/* Company Website */}
            <div>
              <Label htmlFor="website">Company Website</Label>
              <Input
                value={input.website}
                onChange={changeEventHandler}
                name="website"
                id="website"
                type="text"
                placeholder="Enter company website"
              />
            </div>

            {/* Company Location */}
            <div>
              <Label htmlFor="location">Company Location</Label>
              <Input
                value={input.location}
                onChange={changeEventHandler}
                name="location"
                id="location"
                type="text"
                placeholder="Enter company location"
              />
            </div>

            {/* Company Logo */}
            <div>
              <Label htmlFor="logo">Company Logo</Label>
              <Input
                onChange={changeFileHandler}
                accept="image/*"
                name="logo"
                id="logo"
                type="file"
              />
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#9B59B6] hover:bg-[#7A3C8E] text-white py-3 px-6 text-lg"
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
