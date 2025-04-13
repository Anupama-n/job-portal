import React from 'react';
import { Badge } from './ui/badge';

const LatestJobCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#34495E]">Company Name</h1>
          <p className="text-sm text-gray-500">Nepal</p>
        </div>
        <div className="text-sm text-gray-500">Posted 3 hours ago</div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#9B59B6]">Job Title</h2>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, odio.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge className="text-gray-700 font-medium py-1 px-4 border border-gray-400 bg-white rounded-lg">
          12 Positions
        </Badge>
        <Badge className="text-gray-700 font-medium py-1 px-4 border border-gray-400 bg-white rounded-lg">
          Part Time
        </Badge>
        <Badge className="text-gray-700 font-medium py-1 px-4 border border-gray-400 bg-white rounded-lg">
          24LPA
        </Badge>
      </div>

    </div>
  );
};

export default LatestJobCard;
