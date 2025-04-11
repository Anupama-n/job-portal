import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from "@/components/ui/label";
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from 'react-router-dom';

const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    })


    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });

    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);

    }

    return (
        <div>
            <Navbar />

            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <form onSubmit={submitHandler} action="">
                    <h1 className="font-bold text-xl text-center text-[#9B59B6] mb-5">Sign Up</h1>

                    <div className="mb-4">
                        <Label className="block text-sm font-medium text-gray-700">Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Aarika Thapa"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>



                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Email</Label>
                        <Input
                            type="text"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="arikathapa82@gmail.com"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>
                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="**********"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>


                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="9852618290"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>

                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700 mb-3">User Type</Label>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    id="student"
                                    value="student"
                                    name="role"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    className="h-4 w-4 border-gray-300 text-[#9B59B6] focus:ring-[#9B59B6] rounded-full cursor-pointer transition-all duration-200"
                                />
                                <Label htmlFor="student" className="text-sm text-gray-700 cursor-pointer">
                                    Student
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    id="recruiter"
                                    value="recruiter"
                                    name="role"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    className="h-4 w-4 border-gray-300 text-[#9B59B6] focus:ring-[#9B59B6] rounded-full cursor-pointer transition-all duration-200"
                                />
                                <Label htmlFor="recruiter" className="text-sm text-gray-700 cursor-pointer">
                                    Recruiter
                                </Label>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mb-5'>
                        <Label>Profile</Label>
                        <Input
                            accept="image/*"
                            type="file"
                            onChange={changeFileHandler}
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
