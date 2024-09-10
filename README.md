# Resume Builder -(Introduction)

 Resume Builder React is an online resume builder application built using React. It allows users to create professional resumes easily. The project utilizes various technologies including React, react-router-dom, Redux Toolkit, and react-pdf/renderer.

## Features

- ### User-Friendly Interface:

  Our intuitive interface makes it easy for users of all levels to create beautiful resumes.

- ### Dynamic Content:

  Add and edit sections such as personal exprience, work experience, education, skills with ease.

- ### Real-Time Preview:

  See how your resume looks as you make changes, ensuring a polished final product.

- ### Download and Share:
  Download your resume as a PDF or share it directly with employers via a unique URL.

# Folder structure
- public/
  - images/
    - aboutus.jpg
    - almabetter.png
    - LOGO.png
    - nodata.png
    - Right.png
    - Templete1.png
    - Templete2.jpg
    - Templete3.jpg
    - Templete4.jpg

- src/
  - app/
    - store.js
  - features/
    - KeySkills.js
    - PersonalInformation.js
    - preview.js
    - Education/
      - education.js
    - Resumes/
      - resume1.js
      - resume2.js
    - Template/
      - Template.js
      - TemplateCard.js
    - userDetails/
      - userDetailsSlice.js
    - workExperience/
      - workExperience.js
      - workExperienceDetails.js
  - App.css
  - App.js
  - App.test.js
  - index.js
  - index.css
  - index.js

# Create React App
npx create-react-app `App Name`

# Installation instructions
npm install

# How to use the project
npm start

# github link
`https://github.com/Prasanjitprusty/Resume_Builder.git`

# Netlify Link
`https://prasanjitresumebuilder.netlify.app`
 
# Add Dependencies 
npm install react-dom   
npm install react-redux
npm install react-router-dom
npm install html2canvas
npm install @reduxjs/toolkit
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/react-fontawesome
npm install jspdf

# Add tailwind css 
+-----------------+
|    Terminal     |
+-----------------+
npm install -D tailwindcss
npx tailwindcss init

+-----------------+
| tailwind.config |
+-----------------+
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

+-----------+
| input.css |
+-----------+
@tailwind base;
@tailwind components;
@tailwind utilities;

# To Build the Project
npm run build

## Contact
For any query or anything contact me here prasanjitprusty390@gmail.com

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit).