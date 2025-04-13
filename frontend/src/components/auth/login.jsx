import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from "@/components/ui/label";
import { Input } from '../ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { USER_API_END_POINT } from '@/utils/constant';
import axios from "axios";
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import store from '@/redux/store';
import { Loader, Loader2 } from 'lucide-react';


const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "student"
    });
    const {loading} = useSelector(store=>store.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(setLoading(true));
        try {
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });

            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/")
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error("Signup error:", error);
            const errorMessage = error.response?.data?.message || "Something went wrong. Please try again.";
            toast.error(errorMessage);
        } 
        finally{
            dispatch(setLoading(false));
        }

    }


    return (
        <div>
            <Navbar />

            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <form onSubmit={submitHandler}>
                    <h1 className="font-bold text-xl text-center text-[#9B59B6] mb-5">Login</h1>

                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder="aarikathapa82@gmail.com"
                            className="mt-1 px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-[#9B59B6]"
                        />
                    </div>

                    <div className="mb-6">
                        <Label className="block text-sm font-medium text-gray-700">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            placeholder="********"
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
                                <Label htmlFor="student" className="text-sm text-gray-700 cursor-pointer">Student</Label>
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
                                <Label htmlFor="recruiter" className="text-sm text-gray-700 cursor-pointer">Recruiter</Label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mb-4">
                        <Link to="/forgot-password" className="text-sm text-[#9B59B6] hover:underline">Forgot Password?</Link>
                    </div>
                    {
                        loading ? <button className='m-full my-4'> <Loader2 className='ms-2 h-4 w-4 animate-spin'/>Please Wait</button>:
                        <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#9B59B6] text-white font-semibold rounded-md shadow-md hover:bg-[#7A3C8E] focus:outline-none focus:ring-2 focus:ring-[#9B59B6] mb-4"
                        >
                            Login
                        </button>
                    </div>

                    }

                

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
