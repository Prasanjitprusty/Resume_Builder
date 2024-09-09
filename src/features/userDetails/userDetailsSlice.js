import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedResume: null, // Updated from selectedTemplate
  personalInformation: {},
  workExperience: {},
  education: {},
  skills: {},
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    selectTemplate(state, action) {
      state.selectedResume = action.payload.resume; // Updated from selectedTemplate
      state.selectedResume = action.payload.resume;
    },
    setPersonalInformation: (state, action) => {
      state.personalInformation = action.payload;
    },
    setWorkExperienceInformation: (state, action) => {
      state.workExperience = action.payload;
    },
    setEducationInformation: (state, action) => {
      state.education = action.payload;
    },
    setSkillsInformation: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const {
  selectTemplate, // Updated from selectTemplate
  setPersonalInformation,
  setWorkExperienceInformation,
  setEducationInformation,
  setSkillsInformation,
} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;