import React from 'react';
import { useSelector } from 'react-redux';
import Resume1 from './Resumes/resume1';
import Resume2 from './Resumes/resume2';

export default function Preview() {
  const userDetails = useSelector(state => state.userDetails);
  console.log('User Details State:', userDetails);

  const { selectedResume } = userDetails;

  const renderResume = () => {
    switch (selectedResume) {
      case 'resume1':
        return <Resume1 />;
      case 'resume2':
        return <Resume2 />;
      // Add more cases as needed
      default:
        return <p>No resume selected.</p>;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Preview</h1>
      <div className="mb-4">
        {renderResume()}
      </div>
    </div>
  );
}
