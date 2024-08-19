import React from "react";
import TemplateCard from "./TemplateCard";
import { useNavigate } from "react-router-dom";

export default function Template() {
  const templateArray = [
    'images/Templete1.png',
    'images/Templete2.jpg',
    'images/Templete3.jpg',
    'images/Templete4.jpg',
  ];

  const navigate = useNavigate();

  const useTemplate = () => {
    console.log('Template selected');
    navigate('/personalInformation');
  };

  return (
    <div className="mx-2 my-6">
      <h1 className="text-4xl font-bold mb-4">Template</h1>
      <div className="flex gap-8">
        {templateArray.map((item, idx) => (
          <TemplateCard key={idx} data={item} onClick={useTemplate} />
        ))}
      </div>
    </div>
  );
}
