import React from "react";
import { useSelector } from "react-redux";
import Resume1 from "./Resumes/resume1";
import Resume2 from "./Resumes/resume2";
import Resume3 from "./Resumes/resume3";

export default function MyResume() {
  const selectedResume = useSelector((state) => state.userDetails.selectedResume);

  const renderSavedResume = () => {
    switch (selectedResume) {
      case "resume1":
        return <Resume1 />;
      case "resume2":
        return <Resume2 />;
      case "resume3":
        return <Resume3 />;
      default:
        return <img src="/images/nodata.png" alt="No Data Available" />;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">My Saved Resume</h1>
      <div className="border p-4">
        {renderSavedResume()}
      </div>
    </div>
  );
}
