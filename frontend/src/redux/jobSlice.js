import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs: [],
        allAdminJobs: [],
        singleJob:null,
        searchJobByText: "",
    },
    reducers:{
        setAllJobs: (state,action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;

        },
        setAllAdminJobs:(state,action) => {
            state.allAdminJobs = action.payload
        },
        searchJobByText: (state,actio0n) =>{
            state.searchJobByText= action.payload
        }
    }
});

export const {setAllJobs, setSingleJob, setAllAdminJobs, searchJobByText} = jobSlice.actions;
export default jobSlice.reducer;
