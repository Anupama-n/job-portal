import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const JobDescription = () => {
    const isApplied = false;
    const jobRole = "Frontend Developer";

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md my-10 space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-1">Job Title</h1>
                <p className="text-md text-[#9B59B6] font-medium">{jobRole}</p>
                <p className="text-sm text-gray-500">Posted 2 days ago • Kathmandu, Nepal</p>
            </div>

            <div className="flex flex-wrap gap-3">
                <Badge className="bg-gray-100 text-gray-700 font-medium py-1 px-4 border border-gray-300 rounded-lg">
                    12 Positions
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 font-medium py-1 px-4 border border-gray-300 rounded-lg">
                    Part Time
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 font-medium py-1 px-4 border border-gray-300 rounded-lg">
                    24 LPA
                </Badge>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-1">Job Description</h2>
                <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Responsibilities include writing clean code, collaborating with team members, and delivering quality software solutions.
                </p>
            </div>

            <div>
                <Button
                    className={`px-6 py-2 text-sm ${
                        isApplied
                            ? 'bg-gray-600 text-white cursor-not-allowed hover:bg-gray-700'
                            : 'bg-[#A569BD] hover:bg-[#8e44ad] text-white'
                    }`}
                    disabled={isApplied}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
        </div>
    );
};

export default JobDescription;
