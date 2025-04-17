import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios
 from 'axios';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';

const JobDescription = () => {
    const isApplied = false;
    const params = useParams();
    const jobId = params.id;
    const {singleJob} = useSelector(store => store.job);
    const {user} = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const postedDate = new Date(singleJob.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });


    useEffect(() => {
      const fetchSingleJobs = async () => {
          try {
              const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials:true});
              
              console.log("Job response: ", res.data);
              if(res.data.success){
                  dispatch(setSingleJob(res.data.job));
              }
          } catch (error) {
              console.log(error);
              
          }
      }
      fetchSingleJobs();
  },[jobId, dispatch,user?._id ])

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg my-10 space-y-8">

            <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h1 className="text-4xl font-semibold text-gray-800">{singleJob?.name}</h1>
                    <p className="text-xl text-[#9B59B6] font-medium">{singleJob?.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{postedDate} • {singleJob?.location}</p>
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
                    {singleJob?.position} Positions
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 font-medium py-2 px-6 border border-gray-300 rounded-lg">
                    {singleJob?.jobType}
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 font-medium py-2 px-6 border border-gray-300 rounded-lg">
                    {singleJob?.salary} <span>LPA</span>
                </Badge>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Job Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Location:</span>
                        <span>{singleJob?.location}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Salary:</span>
                        <span>{singleJob?.salary} LPA</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Job Type:</span>
                        <span>{singleJob?.jobType}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Positions Available:</span>
                        <span>{singleJob?.position}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Experience:</span>
                        <span>{singleJob?.experience}Years</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-800 w-1/3">Total Applicants:</span>
                        <span>{singleJob?.applications?.length}</span>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Job Description</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                   {singleJob?.description}
                </p>
            </div>
        </div>
    );
};

export default JobDescription;