import React, { useState } from "react";
import { useSelector } from "react-redux";
import Resume1 from "./Resumes/resume1";
import Resume2 from "./Resumes/resume2";
import Resume3 from "./Resumes/resume3";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Preview() {
  const [pdfFileName, setPdfFileName] = useState("resume-preview"); // Default file name
  const userDetails = useSelector((state) => state.userDetails);
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

  return (
    <div className="p-4">
      <h1 className="flex justify-center text-4xl font-bold mb-4">Preview</h1>
      <div className="mb-4">
        <div className="flex justify-end mb-4">
          <input
            id="pdf"
            name="pdf"
            type="text"
            placeholder="Enter File Name"
            value={pdfFileName}
            onChange={(e) => setPdfFileName(e.target.value)}
            className="block w-1/2 p-2 border font-sans text-center mb-6 rounded-md ml-2"
          />
          <label
            htmlFor="pdf"
            className="block text-sm m-2 font-sans underline hover:text-green-400 text-blue-800 mb-2 cursor-pointer"
            onClick={handleDownloadPdf}
          >
            (Download as Pdf)
          </label>
        </div>

        <div id="resume-content">
          {renderResume()}
        </div>
      </div>
    </div>
  );
}
