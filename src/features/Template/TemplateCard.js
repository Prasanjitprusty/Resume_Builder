import React, { useState } from "react";

export default function TemplateCard({ data, onClick }) {
  const [show, setShow] = useState(false); // Initialize 'show' state to false

  return (
    <div
      className="relative w-6/12 h-96"
      onMouseEnter={() => setShow(true)} // Show the button on mouse enter
      onMouseLeave={() => setShow(false)} // Hide the button on mouse leave
    >
      <img
        src={data}
        alt="Template"
        className="w-full h-full object-cover"
      />

      {/* Conditional rendering to show the button when 'show' is true */}
      <div
        className={`absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="border-2 border-blue-500 bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
          onClick={onClick} // Trigger 'onClick' function when the button is clicked
        >
          Use Template
        </button>
      </div>
    </div>
  );
}