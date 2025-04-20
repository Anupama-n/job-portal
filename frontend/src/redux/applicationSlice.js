import { createSlice } from "@reduxjs/toolkit";
import { conformsTo } from "lodash";

const applicationSlice = createSlice ({
    name:'application',
    initialState:{
        applicants:[]
    },
    reducers: {
        setAllApplicants:(state,action)=>{
            state.applicants=action.payload
        }
    }
});
export const {setAllApplicants} = applicationSlice.actions;
export default applicationSlice.reducer;