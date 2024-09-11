import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenRuler, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEducationInformation } from "../userDetails/userDetailsSlice";

export default function EducationDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formData, setFormData] = useState([
    {
      type: "",
      university: "",
      degree: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [errors, setErrors] = useState([{}]); // To track form validation errors

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);

    // Reset error for this field when user starts typing
    const updatedErrors = [...errors];
    updatedErrors[index][name] = "";
    setErrors(updatedErrors);
  };

  const addNewForm = (e) => {
    e.preventDefault();
    setFormData([
      ...formData,
      {
        type: "",
        university: "",
        degree: "",
        startYear: "",
        endYear: "",
      },
    ]);
    setErrors([...errors, {}]);

    const newParam = `Type${formData.length + 1}`;
    searchParams.set(newParam, newParam);
    setSearchParams(searchParams);
  };

  const deleteForm = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);

    searchParams.delete(`Type${index + 1}`);
    updatedFormData.forEach((_, i) => {
      searchParams.set(`Type${i + 1}`, `Type${i + 1}`);
    });
    setSearchParams(searchParams);
  };

  // Validate the form before submission
  const validateForm = () => {
    const newErrors = formData.map((form) => {
      const error = {};
      if (!form.type) error.type = "Educational type is required.";
      if (!form.university) error.university = "University is required.";
      if (!form.degree) error.degree = "Degree is required.";
      if (!form.startYear) error.startYear = "Start year is required.";
      if (!form.endYear) error.endYear = "End year is required.";
      return error;
    });

    setErrors(newErrors);
    return newErrors.every((error) => Object.keys(error).length === 0);
  };

  const getFormData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setEducationInformation(formData));
      navigate("/keySkills");
    } else {
      console.log("Validation errors:", errors);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-slate-500 rounded-md mx-auto p-4 md:p-8 max-w-5xl w-full">
      <form onSubmit={getFormData}>
        <div className="text-center text-2xl md:text-3xl text-fuchsia-900 font-semibold mb-6">
          <FontAwesomeIcon icon={faPenRuler} className="mr-2" /> Education Details
        </div>
        {formData.map((form, index) => (
          <div key={index} className="mb-6">
            <div className="text-lg font-semibold mb-2 text-orange-500">
              {`Education Entry ${index + 1}`}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Type */}
              <div>
                <label
                  htmlFor={`type-${index}`}
                  className="text-lg block mb-2 text-blue-300"
                >
                  Educational Type
                </label>
                <input
                  id={`type-${index}`}
                  name="type"
                  type="text"
                  placeholder="Enter Educational Type"
                  value={form.type}
                  onChange={(e) => handleInputChange(index, e)}
                  className="block w-full p-2 border rounded-md"
                />
                {errors[index]?.type && (
                  <p className="text-red-500 text-sm">{errors[index].type}</p>
                )}
              </div>

              {/* University */}
              <div>
                <label
                  htmlFor={`university-${index}`}
                  className="text-lg block mb-2 text-blue-300"
                >
                  University
                </label>
                <input
                  id={`university-${index}`}
                  name="university"
                  type="text"
                  placeholder="Enter University"
                  value={form.university}
                  onChange={(e) => handleInputChange(index, e)}
                  className="block w-full p-2 border rounded-md"
                />
                {errors[index]?.university && (
                  <p className="text-red-500 text-sm">{errors[index].university}</p>
                )}
              </div>

              {/* Degree */}
              <div>
                <label
                  htmlFor={`degree-${index}`}
                  className="text-lg block mb-2 text-blue-300"
                >
                  Degree
                </label>
                <input
                  id={`degree-${index}`}
                  name="degree"
                  type="text"
                  placeholder="Enter Degree"
                  value={form.degree}
                  onChange={(e) => handleInputChange(index, e)}
                  className="block w-full p-2 border rounded-md"
                />
                {errors[index]?.degree && (
                  <p className="text-red-500 text-sm">{errors[index].degree}</p>
                )}
              </div>

              {/* Start Year */}
              <div>
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
                  <p className="text-red-500 text-sm">{errors[index].startYear}</p>
                )}
              </div>

              {/* End Year */}
              <div>
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
            <div className="flex justify-end mt-4">
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
        <div className="text-center mt-6">
          <button
            className="flex items-center mx-auto justify-center p-4 bg-green-500 hover:bg-green-600 rounded-md"
            onClick={addNewForm}
          >
            Add New
            <FontAwesomeIcon
              aria-label="Add Education"
              className="ml-2"
              icon={faCirclePlus}
            />
          </button>
        </div>
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
