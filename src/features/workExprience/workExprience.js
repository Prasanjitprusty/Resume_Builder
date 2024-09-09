import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWorkExperienceInformation } from "../userDetails/userDetailsSlice";

export default function WorkExperience() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formData, setFormData] = useState([
    {
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);

    // Clear error on input change
    const updatedErrors = [...errors];
    updatedErrors[index] = { ...updatedErrors[index], [name]: "" };
    setErrors(updatedErrors);
  };

  const validateForm = () => {
    const validationErrors = formData.map((form) => {
      const formErrors = {};
      if (!form.jobTitle) formErrors.jobTitle = "Job Title is required";
      if (!form.organizationName)
        formErrors.organizationName = "Organization Name is required";
      if (!form.startYear) formErrors.startYear = "Start Year is required";
      if (!form.endYear) formErrors.endYear = "End Year is required";
      return formErrors;
    });

    setErrors(validationErrors);
    return validationErrors.every(
      (formErrors) => Object.keys(formErrors).length === 0
    );
  };

  const addNewForm = (e) => {
    e.preventDefault();
    setFormData([
      ...formData,
      {
        jobTitle: "",
        organizationName: "",
        startYear: "",
        endYear: "",
      },
    ]);

    const newParam = `Company${formData.length + 1}`;
    searchParams.set(newParam, newParam);
    setSearchParams(searchParams);

    // Add an empty error object for the new form
    setErrors([...errors, {}]);
  };

  const deleteForm = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);

    searchParams.delete(`Company${index + 1}`);
    updatedFormData.forEach((_, i) => {
      searchParams.set(`Company${i + 1}`, `Company${i + 1}`);
    });
    setSearchParams(searchParams);

    // Remove corresponding error entry
    const updatedErrors = errors.filter((_, i) => i !== index);
    setErrors(updatedErrors);
  };

  const getFormData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      dispatch(setWorkExperienceInformation(formData));
      navigate("/education");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-slate-500 rounded-sm m-24 p-8">
      <form onSubmit={getFormData}>
        <div className="text-center scale-125 mt-4 text-fuchsia-900">
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Work
          Experience
        </div>

        {formData.map((form, index) => (
          <div key={index} className="mt-8">
            <label className="text-2xl font-sans underline text-orange-500">
              {`Company -${index + 1}`}
            </label>
            <div className="flex gap-4 mt-4 flex-row">
              {/* Job Title */}
              <div className="flex-1">
                <label
                  htmlFor={`jobTitle-${index}`}
                  className="text-lg block mb-2 text-blue-300"
                >
                  Job Title
                </label>
                <input
                  id={`jobTitle-${index}`}
                  name="jobTitle"
                  type="text"
                  placeholder="Enter Job Title"
                  value={form.jobTitle}
                  onChange={(e) => handleInputChange(index, e)}
                  className="block w-full p-2 border rounded-md"
                />
                {errors[index]?.jobTitle && (
                  <p className="text-red-500 text-sm">
                    {errors[index].jobTitle}
                  </p>
                )}
              </div>

              {/* Organization Name */}
              <div className="flex-1">
                <label
                  htmlFor={`organizationName-${index}`}
                  className="text-lg block mb-2 text-blue-300"
                >
                  Organization Name
                </label>
                <input
                  id={`organizationName-${index}`}
                  name="organizationName"
                  type="text"
                  placeholder="Enter Organization Name"
                  value={form.organizationName}
                  onChange={(e) => handleInputChange(index, e)}
                  className="block w-full p-2 border rounded-md"
                />
                {errors[index]?.organizationName && (
                  <p className="text-red-500 text-sm">
                    {errors[index].organizationName}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 mt-4 flex-row">
              {/* Start Year */}
              <div className="flex-1">
                <label
                  htmlFor={`startYear-${index}`}
                  className="text-lg block mb-2 text-blue-300"
                >
                  Start Year
                </label>
                <input
                  id={`startYear-${index}`}
                  name="startYear"
                  type="date"
                  value={form.startYear}
                  onChange={(e) => handleInputChange(index, e)}
                  className="block w-full p-2 border rounded-md"
                />
                {errors[index]?.startYear && (
                  <p className="text-red-500 text-sm">
                    {errors[index].startYear}
                  </p>
                )}
              </div>

              {/* End Year */}
              <div className="flex-1">
                <label
                  htmlFor={`endYear-${index}`}
                  className="text-lg block mb-2 text-blue-300"
                >
                  End Year
                </label>
                <input
                  id={`endYear-${index}`}
                  name="endYear"
                  type="date"
                  value={form.endYear}
                  onChange={(e) => handleInputChange(index, e)}
                  className="block w-full p-2 border rounded-md"
                />
                {errors[index]?.endYear && (
                  <p className="text-red-500 text-sm">{errors[index].endYear}</p>
                )}
              </div>
            </div>

            {/* Delete Form Button */}
            <div className="mt-2 flex justify-end">
              <button
                type="button"
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={() => deleteForm(index)}
              >
                Delete Form
              </button>
            </div>
          </div>
        ))}

        {/* Add New Form */}
        <div className="text-center mt-6">
          <button
            className="flex justify-center items-center flex-row p-4 bg-green-500 hover:bg-green-600 rounded-md px-7 mx-auto"
            onClick={addNewForm}
          >
            Add New
            <FontAwesomeIcon
              aria-label="Add Skill"
              className="ml-2 cursor-pointer"
              icon={faCirclePlus}
            />
          </button>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end gap-3 mt-10">
          <button
            type="button"
            onClick={handleBack}
            className="bg-red-400 px-8 py-3 rounded-lg leading-tight tracking-widest"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-yellow-400 px-8 py-3 rounded-lg leading-tight tracking-widest"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
