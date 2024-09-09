import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faTrash, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSkillsInformation } from '../features/userDetails/userDetailsSlice';

export default function KeySkills() {
  // State to manage the list of skills
  const [skills, setSkills] = useState([{ id: Date.now(), skill: "" }]);
  
  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // Update the skill value when input changes
  const handleInputForm = (e, id) => {
    const { name, value } = e.target;
    setSkills(skills.map(skill => skill.id === id ? { ...skill, [name]: value } : skill));

    // Clear error when the user starts typing
    setErrors({ ...errors, [id]: "" });
  };

  // Add new empty skill input
  const addNewForm = () => {
    setSkills([...skills, { id: Date.now(), skill: "" }]);
  };

  // Remove a skill input entry
  const removeForm = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  // Routing and Redux setup
  const navigate = useNavigate(); // For navigating to different routes
  const dispatch = useDispatch(); // Dispatch function to send data to the Redux store

  // Validate the form before submission
  const validateForm = () => {
    const newErrors = {};
    skills.forEach((skill) => {
      if (!skill.skill) {
        newErrors[skill.id] = "Skill is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Process and send the skills data to the Redux store
  const getFormData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setSkillsInformation(skills)); // Dispatch the skills information to the Redux store
      navigate('/preview'); // Navigate to the preview page
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="bg-slate-500 rounded-sm m-24 p-8">
      <form onSubmit={getFormData}> {/* Form to handle skill inputs */}
        <div className="text-center scale-125 mt-4 text-fuchsia-900">
          <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-2" /> Key Skills
        </div>

        {skills.map((data, idx) => ( // Mapping through the skills to display input fields
          <div key={data.id} className="flex flex-row items-center gap-4 mb-4">
            <div className="flex-1">
              <label className="text-lg text-blue-300 block mb-1">Key Skill {idx + 1}</label> {/* Label indicating the Key Skill number */}
              <input
                type="text"
                name="skill"
                value={data.skill}
                onChange={(e) => handleInputForm(e, data.id)}
                placeholder="Enter Key Skill"
                className={`w-full p-2 border ${errors[data.id] ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-blue-400`}
              /> {/* Input field for entering Key Skill */}
              {errors[data.id] && (
                <p className="text-red-500">{errors[data.id]}</p> // Error message if the skill input is empty
              )}
            </div>

            <div className="flex flex-col justify-center items-center gap-2 mt-6">
              {/* Add new skill button */}
              <FontAwesomeIcon
                aria-label="Add Skill"
                className="cursor-pointer text-green-500 hover:text-green-600 text-xl"
                icon={faCirclePlus}
                onClick={addNewForm}
              />
              {skills.length > 1 && ( // Render remove button only if there's more than 1 skill
                /* Remove skill button */
                <FontAwesomeIcon
                  aria-label="Remove Skill"
                  className="cursor-pointer text-red-500 hover:text-red-600 text-xl"
                  icon={faTrash}
                  onClick={() => removeForm(data.id)}
                />
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-end gap-3 mt-10">
          <button
            type="button"
            className="bg-red-400 px-8 py-3 rounded-lg leading-tight tracking-widest"
            onClick={() => navigate(-1)} // Button to go back using the router's history
          >
            Back
          </button>
          <button type="submit" className="bg-yellow-400 px-8 py-3 rounded-lg leading-tight tracking-widest"> {/* Submit the form to save skills and move to the next page */}
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
