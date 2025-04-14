import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen, FileText } from 'lucide-react';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    const skills = user?.profile?.skills || [];
    const resume = user?.profile?.resume;
    const bio = user?.profile?.bio || 'Add your bio here';

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-4xl mx-auto mt-10 px-4">
                <div className="relative bg-white border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col space-y-8">

                    <Button
                        onClick={() => setOpen(true)}
                        size="icon"
                        variant="outline"
                        className="absolute top-4 right-4"
                        aria-label="Edit Profile"
                    >
                        <Pen className="w-4 h-4" />
                    </Button>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-6">
                        <Avatar className="h-24 w-24 ring-2 ring-[#9B59B6]">
                            <AvatarImage src="https://static.thenounproject.com/png/363640-200.png" />
                        </Avatar>

                        <div className="flex flex-col space-y-3">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-800">{user?.fullname}</h1>
                                <p className="text-gray-500">{bio}</p>
                            </div>

                            <div className="text-gray-600 space-y-2 pt-1">
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4 text-[#9B59B6]" />
                                    <span>{user?.email}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Contact className="w-4 h-4 text-[#9B59B6]" />
                                    <span>{user?.phoneNumber}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-medium text-gray-700 mb-2">Skills</h2>
                        {skills.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <Badge
                                        key={index}
                                        className="bg-purple-100 text-[#9B59B6] border border-purple-300"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400 text-sm">No skills added yet.</p>
                        )}
                    </div>

                    <div>
                        <h2 className="text-lg font-medium text-gray-700 mb-2">Resume</h2>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <FileText className="w-5 h-5 text-[#9B59B6]" />
                            {resume ? (
                                <>
                                    <a target="_blank" rel="noreferrer" href={resume}>
                                        View Resume
                                    </a>
                                    <Button variant="outline" size="sm">
                                        <Link to={resume} target="_blank">Open</Link>
                                    </Button>
                                </>
                            ) : (
                                <span>No resume uploaded.</span>
                            )}

                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto my-10 px-4">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Applied Jobs</h1>
                    <AppliedJobTable />
                </div>
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;
