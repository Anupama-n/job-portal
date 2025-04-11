import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from "@/components/ui/label";
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from 'react-router-dom';

const Login = () => {
    const [selectedOption, setSelectedOption] = useState("student");

    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div>
            <Navbar />

            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <form>
                    <h1 className="font-bold text-xl text-center text-[#9B59B6] mb-5">Login</h1>

                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Email</Label>
                        <Input
                            type="email"
                            placeholder="aarikathapa82@gmail.com"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>

                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Password</Label>
                        <Input
                            type="password"
                            placeholder="********"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>

                    <div>
                        <Label className="block text-sm font-medium text-gray-700 mb-3">User Type</Label>
                        <RadioGroup value={selectedOption} onValueChange={handleRadioChange}>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="student"
                                        name="role"
                                        className="h-4 w-4 border-gray-300 text-[#9B59B6] focus:ring-[#9B59B6] rounded-full cursor-pointer transition-all duration-200"
                                    />
                                    <Label className="text-sm text-gray-700 cursor-pointer">Student</Label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="recruiter"
                                        name="role"
                                        className="h-4 w-4 border-gray-300 text-[#9B59B6] focus:ring-[#9B59B6] rounded-full cursor-pointer transition-all duration-200"
                                    />
                                    <Label className="text-sm text-gray-700 cursor-pointer">Recruiter</Label>
                                </div>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="flex justify-end mb-4">
                        <Link to="/forgot-password" className="text-sm text-[#9B59B6] hover:underline">Forgot Password?</Link>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#9B59B6] text-white font-semibold rounded-md shadow-md hover:bg-[#7A3C8E] focus:outline-none focus:ring-2 focus:ring-[#9B59B6] mb-4"
                        >
                            Login
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <span>
                            Don't have an account? <Link to="/signup" className="text-[#9B59B6] hover:underline">Sign Up</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
