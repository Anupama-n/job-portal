import { setAllJobs } from '@/redux/jobSlice';
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCompanies } from '@/redux/companySlice';

const useGetAllCompanies = (companyId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {withCredentials:true});
                
                if(res.data.success){
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchCompany();
    },[ ])
}



export default useGetAllCompanies;