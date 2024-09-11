import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import Resume1 from "./Resumes/resume1";
import Resume2 from "./Resumes/resume2";
import Resume3 from "./Resumes/resume3";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { selectTemplate } from "./userDetails/userDetailsSlice"; // Import selectTemplate action

export default function Preview() {
  const [pdfFileName, setPdfFileName] = useState("resume-preview"); // Default file name
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch(); // Initialize dispatch
  
  console.log("User Details State:", userDetails);

  const { selectedResume } = userDetails;

  const renderResume = () => {
    switch (selectedResume) {
      case "resume1":
        return <Resume1 />;
      case "resume2":
        return <Resume2 />;
      case "resume3":
        return <Resume3 />;
      default:
        return <p>No resume selected.</p>;
    }
  };

  const handleDownloadPdf = () => {
    const input = document.getElementById("resume-content");

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      
      pdf.save(`${pdfFileName}.pdf`);
    });
  };

  const handleSaveResume = () => {
    dispatch(selectTemplate({ resume: selectedResume })); // Save resume to Redux
    alert('Resume has been saved to My Resume.');
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Preview</h1>
      
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row justify-end gap-2 mb-4">
          <input
            id="pdf"
            name="pdf"
            type="text"
            placeholder="Enter File Name"
            value={pdfFileName}
            onChange={(e) => setPdfFileName(e.target.value)}
            className="block w-full sm:w-1/2 p-2 border border-gray-300 rounded-md text-center mb-2 sm:mb-0"
          />
          <button
            onClick={handleDownloadPdf}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Download as PDF
          </button>
        </div>

        <div id="resume-content" className="overflow-x-auto">
          {renderResume()}
        </div>
      </div>
      
      {/* Container for Save button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSaveResume}  // Save button functionality
          className="bg-orange-400 text-white px-14 py-4 rounded-xl border-2 border-orange-700"
        >
          Save
        </button>
      </div>

    </div>
  );
}
