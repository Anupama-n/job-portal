import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { motion } from 'framer-motion';

const Jobs = () => {
  useGetAllJobs();
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    industry: '',
    salary: ''
  });

  useEffect(() => {
    let filteredJobs = allJobs;

    if (searchedQuery) {
      filteredJobs = filteredJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.salary.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
    }

    if (selectedFilters.location) {
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(selectedFilters.location.toLowerCase())
      );
    }
    if (selectedFilters.industry) {
      filteredJobs = filteredJobs.filter((job) =>
        job.title.toLowerCase().includes(selectedFilters.industry.toLowerCase())
      );
    }
    if (selectedFilters.salary) {
      filteredJobs = filteredJobs.filter((job) =>
        job.salary.toLowerCase().includes(selectedFilters.salary.toLowerCase())
      );
    }

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery, selectedFilters]);

  const handleFilterChange = (newFilters) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-6">
          <div className="w-[15%]">
            <FilterCard onFilterChange={handleFilterChange} />
          </div>
          <div className="flex-1">
            {filterJobs.length <= 0 ? (
              <span>No jobs found</span>
            ) : (
              <div className="h-auto pb-5">
                <motion.div 
                initial = {{opacity:0,x:100}}
                animate={{opacity:1, x:0}}
                exit= {{opacity:0,x:-100}}
                transition= {{duration:0.3}}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filterJobs.map((job) => (
                    <Job key={job._id} job={job} />
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
