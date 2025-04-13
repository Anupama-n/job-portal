import React from 'react';
import LatestJobCard from './LatestJobCard';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold text-left mb-6 text-[#34495E] ml-6">
        <span className="text-[#BB8FCE]">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          randomJobs.slice(0, 6).map((items, index) => (
            <LatestJobCard key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default LatestJobs;

// [#34495E] color for footer