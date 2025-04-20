import React from 'react';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

const LatestJobCard = ({ job }) => {
  const postedDate = new Date(job.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link to={`/jobs/description/${job._id}`} className="block">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#34495E]">{job.company?.name || 'Company Name'}</h1>
            <p className="text-sm text-gray-500">{job.location || 'Location not specified'}</p>
          </div>
          <div className="text-sm text-gray-500">Posted on {postedDate}</div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#9B59B6]">{job.title}</h2>
          <p className="text-sm text-gray-600 mt-2">
            {job.description || 'No description available.'}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className="bg-purple-100 text-purple-800 font-medium py-2 px-6 rounded-full shadow-sm">
            {job?.position || 'N/A'} Positions
          </Badge>
          <Badge className="bg-green-100 text-green-800 font-medium py-2 px-6 rounded-full shadow-sm">
            {job?.jobType || 'N/A'}
          </Badge>
          <Badge className="bg-yellow-100 text-yellow-800 font-medium py-2 px-6 rounded-full shadow-sm">
            {job?.salary || 'N/A'} LPA
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default LatestJobCard;
