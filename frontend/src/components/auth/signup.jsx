import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from "@/components/ui/label";
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [selectedOption, setSelectedOption] = useState("comfortable");  // State to track selected radio option

    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div>
            <Navbar />

            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <form action="">
                    <h1 className="font-bold text-xl text-center text-[#9B59B6] mb-5">Sign Up</h1>

                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">First Name</Label>
                        <Input
                            type="text"
                            placeholder="Aarika"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>

                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Last Name</Label>
                        <Input
                            type="text"
                            placeholder="Thapa"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>

                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Email</Label>
                        <Input
                            type="text"
                            placeholder="arikathapa82@gmail.com"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>

                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Phone Number</Label>
                        <Input
                            type="text"
                            placeholder="9852618290"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>

                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700 mb-3">User Type</Label>
                        <RadioGroup value={selectedOption} onValueChange={handleRadioChange}>
                            <div className="flex items-center space-x-6" >

                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="student"
                                        name="role"
                                        className="h-4 w-4 border-gray-300 text-[#9B59B6] focus:ring-[#9B59B6] rounded-full cursor-pointer transition-all duration-200"
                                    />
                                    <Label htmlFor="r1" className="text-sm text-gray-700 cursor-pointer">Student</Label>
                                </div>


                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="recruiter"
                                        name="role"
                                        className="h-4 w-4 border-gray-300 text-[#9B59B6] focus:ring-[#9B59B6] rounded-full cursor-pointer transition-all duration-200"
                                    />
                                    <Label htmlFor="r2" className="text-sm text-gray-700 cursor-pointer">Recruiter</Label>
                                </div>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className='flex items-center gap-2 mb-5'>
                        <Label>Profile</Label>
                        <Input
                            accept="image/*"
                            type="file"
                            className="cursor-pointer"
                        />
                    </div>


                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#9B59B6] text-white font-semibold rounded-md shadow-md hover:bg-[#7A3C8E] focus:outline-none focus:ring-2 focus:ring-[#9B59B6] mb-4"
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="flex justify-center">

                        <span>
                            Already have an account? <Link to="/login" className="text-[#9B59B6] hover:underline">Login</Link>
                        </span></div>


                </form>
            </div>
        </div>
    );
};

export default Signup;
