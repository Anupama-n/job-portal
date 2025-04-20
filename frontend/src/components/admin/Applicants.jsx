import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../shared/Navbar';
import ApplicantsTable from './ApplicantsTable';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
          { withCredentials: true }
        );
        console.log("Fetched applicants:", res.data.job); 
        dispatch(setAllApplicants(res.data.job));
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllApplicants();
  }, [params.id, dispatch]);

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Applicants {applicants?.applications?.length || 0}
        </h1>

        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;
