import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
  const navigate = useNavigate();

  if (!job || !job.createdAt) {
    return (
      <div className="bg-white p-5 rounded-lg shadow-md text-red-500">
        Error: Job data is missing or incomplete.
      </div>
    );
  }

  const postedDate = new Date(job.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (

    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all space-y-4 w-full">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Posted on {postedDate}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src={job.company?.logo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBHyuf_bJCZp8l1H7u1JJDjkaGnv7_N1IAw&s"}
            alt="Company Logo"
          />
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{job.company?.name || "Company Name"}</h2>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#9B59B6] mb-1">{job.title}</h3>
        <p className="text-sm text-gray-600">
          {job.description}
        </p>
      </div>

      <div className="flex gap-2 flex-wrap sm:flex-nowrap">
        <Badge className="text-gray-700 font-medium py-1 px-4 border border-gray-400 bg-white rounded-lg">
          {job.position} Position{job.position > 1 ? 's' : ''}
        </Badge>
        <Badge className="text-gray-700 font-medium py-1 px-4 border border-gray-400 bg-white rounded-lg">
          {job.jobType}
        </Badge>
        <Badge className="text-gray-700 font-medium py-1 px-4 border border-gray-400 bg-white rounded-lg">
          {job.salary} LPA
        </Badge>
      </div>

      <div className="flex gap-2">
        <Button variant='outline' onClick={() => navigate(`/jobs/description/${job._id}`)}>Details</Button>
        <Button className="bg-[#A569BD] hover:bg-[#8e44ad] text-white">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
