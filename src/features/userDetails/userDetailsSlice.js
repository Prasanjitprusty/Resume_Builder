import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    personalInformation: {
        profilePhoto: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        pincode: "",
        objective: "",
    },
    skills: [],

    workExperience: {  // Changed the key to workExperience
        jobTitle: "",
        organizationName: "",
        startYear: "",
        endYear: ""
    }
};

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setPersonalInformation: (state, action) => {
            state.personalInformation = action.payload;
        },
        setSkillsInformation: (state, action) => {
            state.skills = action.payload;
        },
        setWorkExperienceInformation: (state, action) => {  // Corrected the reducer
            state.workExperience = action.payload;
        },
    }
});

export const { setPersonalInformation, setSkillsInformation, setWorkExperienceInformation } = userDetailsSlice.actions;  // Updated export
export default userDetailsSlice.reducer;
