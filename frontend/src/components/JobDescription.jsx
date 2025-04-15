import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const JobDescription = () => {
    const isApplied = false;
    const jobRole = "Frontend Developer";
    const companyName = "Tech Solutions Inc.";
    const location = "Kathmandu, Nepal";
    const postedDate = "2 days ago";
    const positionsAvailable = 12;
    const jobType = "Part Time";
    const salary = "24 LPA";

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg my-10 space-y-8">

            <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h1 className="text-4xl font-semibold text-gray-800">{companyName}</h1>
                    <p className="text-xl text-[#9B59B6] font-medium">{jobRole}</p>
                    <p className="text-sm text-gray-500 mt-1">{postedDate} • {location}</p>
                </div>
                <div className="mt-6 md:mt-0">
                    <Button
                        className={`px-8 py-3 text-lg ${
                            isApplied
                                ? 'bg-gray-600 text-white cursor-not-allowed'
                                : 'bg-[#A569BD] hover:bg-[#8e44ad] text-white'
                        }`}
                        disabled={isApplied}
                    >
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </div>
            </div>


            <div className="flex flex-wrap gap-4 mt-6">
                <Badge className="bg-gray-100 text-gray-700 font-medium py-2 px-6 border border-gray-300 rounded-lg">
                    {positionsAvailable} Positions
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 font-medium py-2 px-6 border border-gray-300 rounded-lg">
                    {jobType}
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 font-medium py-2 px-6 border border-gray-300 rounded-lg">
                    {salary}
                </Badge>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Job Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Location:</span>
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Salary:</span>
                        <span>{salary}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Job Type:</span>
                        <span>{jobType}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Positions Available:</span>
                        <span>{positionsAvailable}</span>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Job Description</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Join our team as a Frontend Developer! You will work closely with the design and backend teams to create amazing user interfaces 
                    and deliver high-quality software. Responsibilities include:
                    <br />
                    <ul className="list-disc list-inside mt-4 text-gray-600">
                        <li>Writing clean and efficient code using modern JavaScript frameworks like React.</li>
                        <li>Collaborating with designers and product teams to improve user experience.</li>
                        <li>Ensuring the performance, quality, and responsiveness of applications.</li>
                        <li>Identifying and fixing bugs to improve application performance.</li>
                    </ul>
                    <br />
                    <strong>Required Skills:</strong> JavaScript, React, HTML, CSS, UI/UX principles.
                </p>
            </div>
        </div>
    );
};

export default JobDescription;
