import React, { useEffect, useState, useMemo } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { toast } from 'sonner';


const JobDescription = () => {



    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isApplied = useMemo(() => {
        return singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    }, [singleJob, user?._id]);



    const postedDate = new Date(singleJob?.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    useEffect(() => {
        const fetchSingleJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchSingleJobs();
    }, [jobId, dispatch, user?._id]);

    const applyJobHandler = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                toast.success(res.data.message);

                const jobRes = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (jobRes.data.success) {
                    dispatch(setSingleJob(jobRes.data.job));
                }
            }
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-3xl shadow-2xl my-12 space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight text-balance">
                        {singleJob?.name}
                    </h1>
                    <p className="text-2xl text-[#9B59B6] font-medium mt-1">{singleJob?.title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                        {postedDate} • {singleJob?.location}
                    </p>
                </div>
                <div>
                    <Button
                        onClick={applyJobHandler}
                        disabled={isApplied || loading}
                        className={`transition-all duration-200 ease-in-out px-8 py-3 text-lg rounded-full shadow-md ${isApplied
                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                : 'bg-[#A569BD] hover:bg-[#8e44ad] text-white'
                            }`}
                    >
                        {loading
                            ? 'Applying...'
                            : isApplied
                                ? 'Applied Successfully!'
                                : 'Apply Now'}
                    </Button>


                </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
                <Badge className="bg-purple-100 text-purple-800 font-medium py-2 px-6 rounded-full shadow-sm">
                    {singleJob?.position} Positions
                </Badge>
                <Badge className="bg-green-100 text-green-800 font-medium py-2 px-6 rounded-full shadow-sm">
                    {singleJob?.jobType}
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 font-medium py-2 px-6 rounded-full shadow-sm">
                    {singleJob?.salary} <span>LPA</span>
                </Badge>
            </div>

            {/* Job Details */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Job Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                    <div>
                        <span className="font-semibold text-gray-800">Location:</span> {singleJob?.location}
                    </div>
                    <div>
                        <span className="font-semibold text-gray-800">Salary:</span> {singleJob?.salary} LPA
                    </div>
                    <div>
                        <span className="font-semibold text-gray-800">Job Type:</span> {singleJob?.jobType}
                    </div>
                    <div>
                        <span className="font-semibold text-gray-800">Positions Available:</span> {singleJob?.position}
                    </div>
                    <div>
                        <span className="font-semibold text-gray-800">Experience:</span> {singleJob?.experience} Years
                    </div>
                    <div>
                        <span className="font-semibold text-gray-800">Total Applicants:</span> {singleJob?.applications?.length}
                    </div>
                </div>
            </div>

            {/* Description */}
            <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Job Description</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-balance whitespace-pre-line">
                    {singleJob?.description}
                </p>
            </div>
        </div>
    );
};

export default JobDescription;
