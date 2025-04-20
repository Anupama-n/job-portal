import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';

const JobsCreate = () => {
    const navigate = useNavigate();
    const { companies } = useSelector((store) => store.company);

    const [input, setInput] = useState({
        title: '',
        description: '',
        requirements: '',
        salary: '',
        location: '',
        jobType: '',
        experience: '',
        position: 0,
        companyId: ''
    });
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const createJob = async (e) => {
        e.preventDefault();
        if (!input.title.trim()) return toast.error('Please enter a job title.');
        if (!input.companyId) return toast.error('Please select a company.');
        if (isNaN(input.salary) || input.salary.trim() === '') {
            return toast.error('Please enter a valid salary.');
        }
        if (isNaN(input.position) || input.position <= 0) {
            return toast.error('Please enter a valid number of positions.');
        }

        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {

                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (res.data.message) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to create job.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                    <h1 className="font-bold text-3xl text-gray-800">Post a New Job</h1>
                    <p className="text-gray-600 text-sm">
                        Fill in the details to create a job listing. You can edit it later.
                    </p>

                    {/* Fields Section */}
                    <div className="space-y-5">
                        {[
                            { id: 'title', label: 'Job Title', placeholder: 'e.g., Frontend Developer' },
                            { id: 'description', label: 'Description', placeholder: 'Brief job overview' },
                            { id: 'requirements', label: 'Requirements', placeholder: 'Skills, qualifications, etc.' }
                        ].map(({ id, label, placeholder }) => (
                            <div key={id}>
                                <Label htmlFor={id} className="text-sm font-medium text-gray-700">
                                    {label}
                                </Label>
                                <Input
                                    name={id}
                                    value={input[id]}
                                    onChange={changeHandler}
                                    id={id}
                                    type="text"
                                    placeholder={placeholder}
                                    className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { id: 'salary', label: 'Salary', placeholder: 'e.g., 50,000' },
                            { id: 'location', label: 'Location', placeholder: 'e.g., Kathmandu' }
                        ].map(({ id, label, placeholder }) => (
                            <div key={id}>
                                <Label htmlFor={id} className="text-sm font-medium text-gray-700">
                                    {label}
                                </Label>
                                <Input
                                    name={id}
                                    value={input[id]}
                                    onChange={changeHandler}
                                    id={id}
                                    type="text"
                                    placeholder={placeholder}
                                    className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { id: 'jobType', label: 'Job Type', placeholder: 'e.g., Full-time' },
                            { id: 'experience', label: 'Experience', placeholder: 'e.g., 2+ years' }
                        ].map(({ id, label, placeholder }) => (
                            <div key={id}>
                                <Label htmlFor={id} className="text-sm font-medium text-gray-700">
                                    {label}
                                </Label>
                                <Input
                                    name={id}
                                    value={input[id]}
                                    onChange={changeHandler}
                                    id={id}
                                    type="text"
                                    placeholder={placeholder}
                                    className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Position Input */}
                    <div>
                        <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                            Open Positions
                        </Label>
                        <Input
                            name="position"
                            value={input.position}
                            onChange={changeHandler}
                            id="position"
                            type="number"
                            placeholder="e.g., 3"
                            className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>

                    {/* Company Select */}
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1 block">
                            Company
                        </Label>
                        {companies.length > 0 ? (
                            <Select
                                value={input.companyId}
                                onValueChange={(value) => setInput({ ...input, companyId: value })}
                            >
                                <SelectTrigger
                                    className="mt-2 p-3 w-full rounded-md border border-gray-300 text-left focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6] placeholder:text-gray-400"
                                >
                                    <SelectValue placeholder="Select company..." />
                                </SelectTrigger>
                                <SelectContent className="bg-white border border-gray-200 rounded-md shadow-md mt-1 max-h-60 overflow-auto z-50">
                                    <SelectGroup>
                                        {companies.map((company) => (
                                            <SelectItem
                                                key={company._id} // Unique key here
                                                value={company._id}
                                                className="cursor-pointer px-4 py-2 hover:bg-violet-100 focus:bg-violet-200 rounded-sm transition-colors"
                                            >
                                                {company.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ) : (
                            <p className="text-sm text-red-600 font-semibold mt-2">
                                No companies found. Please register a company first.
                            </p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex justify-end gap-4">
                        <Button
                            variant="outline"
                            className="border border-gray-300 text-gray-700 hover:bg-gray-100"
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={createJob}
                            className="bg-[#9B59B6] hover:bg-[#7A3C8E] text-white py-3 px-6 text-lg"
                            disabled={loading}
                        >
                            {loading ? 'Creating...' : 'Create Job'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsCreate;
