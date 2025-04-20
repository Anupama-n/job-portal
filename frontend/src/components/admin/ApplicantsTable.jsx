import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';

const ApplicantsTable = () => {
    const shortlistingStatus = ['Accepted', 'Rejected'];
    const jobData = useSelector((store) => store.application.applicants);
    const applications = jobData?.applications || [];

    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
            <Table>
                <TableCaption className="text-gray-600 mb-4">List of applied users</TableCaption>

                <TableHeader>
                    <TableRow className="bg-gray-50">
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {applications.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} className="text-center text-gray-500 py-6">
                                No applicants have applied yet.
                            </TableCell>
                        </TableRow>
                    ) : (
                        applications.map((item) => {
                            const applicant = item?.applicant;
                            const resumeUrl = applicant?.profile?.resume;
                            const resumeName = applicant?.profile?.resumeOriginalName;

                            return (
                                <TableRow key={item._id} className="hover:bg-gray-50">
                                    <TableCell>{applicant?.fullname || 'N/A'}</TableCell>
                                    <TableCell>{applicant?.email || 'N/A'}</TableCell>
                                    <TableCell>{applicant?.phoneNumber || 'N/A'}</TableCell>

                                    <TableCell>
                                        {resumeUrl ? (
                                            <a
                                                href={resumeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline hover:text-blue-800 transition"
                                            >
                                                View Resume
                                            </a>
                                        ) : (
                                            'N/A'
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {item?.applicant?.createdAt
                                            ? new Date(item.applicant.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })
                                            : 'N/A'}
                                    </TableCell>


                                    <TableCell className="text-right">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <button className="p-1 rounded-full hover:bg-gray-100 transition">
                                                    <MoreHorizontal className="h-5 w-5 text-gray-600" />
                                                </button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-32 p-2 bg-white rounded-md shadow-md space-y-1">
                                                {shortlistingStatus.map((status, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="text-sm hover:text-[#9B59B6] cursor-pointer transition-colors duration-150 px-2 py-1 rounded-md hover:bg-gray-100"
                                                    >
                                                        {status}
                                                    </div>
                                                ))}
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ApplicantsTable;
