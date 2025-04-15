import React from 'react';
import { Badge } from './ui/badge';


const LatestJobCard = ({ job }) => {
  const postedDate = new Date(job.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#34495E]">{job.company?.name}</h1>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        <div className="text-sm text-gray-500">Posted on {postedDate}</div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#9B59B6]">{job.title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {job.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
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
    </div>
  );
};


export default LatestJobCard;
