import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faTrash, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSkillsInformation } from '../features/userDetails/userDetailsSlice';

export default function KeySkills() {
  const [skills, setSkills] = useState([{ id: Date.now(), skill: "" }]);

  const handleInputForm = (e, id) => {
    const { name, value } = e.target;
    setSkills(skills.map(skill => skill.id === id ? { ...skill, [name]: value } : skill));
  };

  const addNewForm = () => {
    setSkills([...skills, { id: Date.now(), skill: "" }]);
  };

  const removeForm = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getFormData = (e) => {
    e.preventDefault();
    console.log('skills:', skills);
    dispatch(setSkillsInformation(skills));
    navigate('/preview');
  };

  return (
    <div className="bg-slate-500 rounded-sm m-24 p-8">
      <form onSubmit={getFormData}>
        <div className="text-center scale-125 mt-4 text-fuchsia-900">
          <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-2" /> Key Skills
        </div>

        {skills.map((data, idx) => (
          <div key={data.id} className="flex flex-row items-center gap-4 mb-4">
            <div className="flex-1">
              <label className="text-lg text-blue-300 block mb-1">Key Skill {idx + 1}</label>
              <input
                type="text"
                name="skill"
                value={data.skill}
                onChange={(e) => handleInputForm(e, data.id)}
                placeholder="Enter Key Skill"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-2 mt-6">
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

        <div className="flex justify-end gap-3 mt-10">
          <button
            type="button"
            className="bg-red-400 px-8 py-3 rounded-lg leading-tight tracking-widest"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button type="submit" className="bg-yellow-400 px-8 py-3 rounded-lg leading-tight tracking-widest">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
