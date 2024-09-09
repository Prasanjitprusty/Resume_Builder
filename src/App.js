import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PersonalInformation from './features/PersonalInformation';
import KeySkills from './features/KeySkills';
import Preview from './features/preview';
import Template from './features/Template/Template';
import WorkExperience from './features/workExprience/workExprience';
import EducationDetails from './features/Education/education';
import NavBar from './features/NavBar';
import AboutUs from './features/AboutUs';
import MyResume from './features/myResume'; // Rename the import

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Template />} />
        <Route path='/personalInformation' element={<PersonalInformation />} />
        <Route path='/keySkills' element={<KeySkills />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/workExperience' element={<WorkExperience />} />
        <Route path='/education' element={<EducationDetails />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/myResume" element={<MyResume />} /> {/* Update the component */}
      </Routes>
    </Router>
  );
}
