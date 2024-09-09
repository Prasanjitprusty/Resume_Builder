import React from "react";
import TemplateCard from "./TemplateCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectTemplate } from '../userDetails/userDetailsSlice';

export default function Template() {
  const templateArray = [
    { image: 'images/Templete1.png', resume: 'resume1' },
    { image: 'images/Templete2.jpg', resume: 'resume2' },
    { image: 'images/Templete3.jpg', resume: 'resume3' },
    { image: 'images/Templete4.jpg', resume: 'resume4' }
  ];
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handler for template selection
  const handleTemplateSelection = (image, resume) => {
    dispatch(selectTemplate({ template: image, resume }));
    navigate('/personalInformation');
  };

  return (
    <div className="mx-2 my-6">
      <h1 className="flex justify-center text-4xl font-bold mb-4 ">Template</h1>
      <div className="flex gap-8">
        {/* Mapping through templateArray to display TemplateCard components */}
        {templateArray.map((item, idx) => (
          <TemplateCard 
            key={idx} 
            data={item.image} 
            onClick={() => handleTemplateSelection(item.image, item.resume)} 
          />
        ))}
      </div>
    </div>
  );
}