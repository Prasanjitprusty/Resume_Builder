import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedResume: null,
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
      state.selectedTemplate = action.payload.template;
      state.selectedResume = action.payload.resume;
    },
    setPersonalInformation: (state, action) => {
      state.personalInformation = action.payload;
    },
    setWorkExperienceInformation: (state, action) => {
      // Corrected the reducer
      state.workExperience = action.payload;
    },
    setEducationInformation: (state, action) => {
      // Corrected the reducer
      state.education = action.payload;
    },
    setSkillsInformation: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const {
  selectTemplate,
  setPersonalInformation,
  setWorkExperienceInformation,
  setEducationInformation,
  setSkillsInformation,
} = userDetailsSlice.actions; // Updated export
export default userDetailsSlice.reducer;
