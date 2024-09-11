import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faTrash, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSkillsInformation } from '../features/userDetails/userDetailsSlice';

export default function KeySkills() {
  const [skills, setSkills] = useState([{ id: Date.now(), skill: "" }]);
  const [errors, setErrors] = useState({});

  const handleInputForm = (e, id) => {
    const { name, value } = e.target;
    setSkills(skills.map(skill => skill.id === id ? { ...skill, [name]: value } : skill));
    setErrors({ ...errors, [id]: "" });
  };

  const addNewForm = () => {
    setSkills([...skills, { id: Date.now(), skill: "" }]);
  };

  const removeForm = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const getFormData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setSkillsInformation(skills));
      navigate('/preview');
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="bg-slate-500 rounded-lg mx-auto max-w-screen-md p-4 sm:p-6 md:p-8 lg:p-10">
      <form onSubmit={getFormData}>
        <div className="text-center text-2xl sm:text-3xl md:text-4xl text-fuchsia-900 mb-4">
          <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-2" /> Key Skills
        </div>

        {skills.map((data, idx) => (
          <div key={data.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
            <div className="flex-1">
              <label className="text-lg text-blue-300 block mb-1">Key Skill {idx + 1}</label>
              <input
                type="text"
                name="skill"
                value={data.skill}
                onChange={(e) => handleInputForm(e, data.id)}
                placeholder="Enter Key Skill"
                className={`w-full p-2 border ${errors[data.id] ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-blue-400`}
              />
              {errors[data.id] && (
                <p className="text-red-500 text-sm mt-1">{errors[data.id]}</p>
              )}
            </div>

            <div className="flex flex-col items-center gap-2 mt-2 md:mt-0">
              <FontAwesomeIcon
                aria-label="Add Skill"
                className="cursor-pointer text-green-500 hover:text-green-600 text-xl"
                icon={faCirclePlus}
                onClick={addNewForm}
              />
              {skills.length > 1 && (
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

        <div className="flex flex-col md:flex-row justify-end gap-4 mt-6">
          <button
            type="button"
            className="bg-red-400 px-4 py-2 md:px-6 md:py-3 rounded-lg text-white leading-tight tracking-widest"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-yellow-400 px-4 py-2 md:px-6 md:py-3 rounded-lg text-black leading-tight tracking-widest"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
