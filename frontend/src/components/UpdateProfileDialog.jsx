import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from './ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import axios from 'axios';
const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullname: '',
        email: '',
        phoneNumber: '',
        bio: '',
        skills: '',
        file: null
    });
    const dispatch = useDispatch();


    useEffect(() => {
        if (open && user) {
            setInput({
                fullname: user?.fullname || '',
                email: user?.email || '',
                phoneNumber: user?.phoneNumber || '',
                bio: user?.profile?.bio || '',
                skills: user?.profile?.skills?.join(', ') || '',
                file: null
            });
        }
    }, [open, user]);


    const changeEventHandler = (e) => {
        const { name, value } = e.target;
        setInput(prevState => ({ ...prevState, [name]: value }));
    };

    const fileChangeHandler = (e) => {
        setInput(prevState => ({ ...prevState, file: e.target.files[0] }));
    };


    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('fullname', input.fullname);
            formData.append('email', input.email);
            formData.append('phoneNumber', input.phoneNumber);
            formData.append('bio', input.bio);
            formData.append('skills', JSON.stringify(input.skills.split(',').map(skill => skill.trim())));

            if (input.file) {
                formData.append('file', input.file);
            }

            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
            if(res.data.success){
                dispatch(setUser(res.data.user))
                toast.success(res.data.message)
            }

        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error(error.response.data.message)
        } finally {
            setLoading(false);
        }
        setOpen(false)
    };


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-gray-800">Update Profile</DialogTitle>
                </DialogHeader>
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="fullname" className="block text-gray-600 text-sm font-medium mb-2">
                            Full Name
                        </label>
                        <Input
                            id="fullname"
                            name="fullname"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A569BD]"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                            Email Address
                        </label>
                        <Input
                            id="email"
                            name="email"
                            value={input.email}
                            type="email"
                            onChange={changeEventHandler}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A569BD]"
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block text-gray-600 text-sm font-medium mb-2">
                            Phone Number
                        </label>
                        <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            value={input.phoneNumber}
                            onChange={changeEventHandler}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A569BD]"
                        />
                    </div>

                    <div>
                        <label htmlFor="bio" className="block text-gray-600 text-sm font-medium mb-2">
                            Bio
                        </label>
                        <Input
                            id="bio"
                            name="bio"
                            value={input.bio}
                            onChange={changeEventHandler}
                            placeholder="Enter your Bio"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A569BD]"
                        />
                    </div>

                    <div>
                        <label htmlFor="skills" className="block text-gray-600 text-sm font-medium mb-2">
                            Skills (comma separated)
                        </label>
                        <Input
                            id="skills"
                            name="skills"
                            value={input.skills}
                            onChange={changeEventHandler}
                            placeholder="Enter your Skills"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A569BD]"
                        />
                    </div>

                    <div>
                        <label htmlFor="file" className="block text-gray-600 text-sm font-medium mb-2">
                            Resume
                        </label>
                        <Input
                            id="file"
                            name="file"
                            type="file"
                            onChange={fileChangeHandler}
                            accept="application/pdf"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A569BD]"
                        />
                    </div>

                    <DialogFooter>
                        {loading ? (
                            <Button className="w-full my-4" disabled>
                                <Loader2 className="h-4 w-4 animate-spin" /> Please Wait
                            </Button>
                        ) : (
                            <div className="flex gap-4">
                                <Button
                                    type="submit"
                                    className="bg-[#A569BD] text-white py-2 px-6 rounded-lg hover:bg-[#8e44ad] w-auto"
                                >
                                    Save Changes
                                </Button>
                                <Button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="bg-white text-gray-700 py-2 px-6 border border-gray-300 rounded-lg hover:bg-gray-200 w-auto"
                                >
                                    Cancel
                                </Button>
                            </div>
                        )}
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProfileDialog;
