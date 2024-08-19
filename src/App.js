import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PersonalInformation from './features/PersonalInformation';
import KeySkills from './features/KeySkills';
import Preview from './features/preview';
import Template from './features/Template/Template';
import WorkExprience from './features/workExprience/workExprience';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Template/>} />
        <Route path='/personalInformation' element={<PersonalInformation />} />
        <Route path='/keySkills' element={<KeySkills />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/workExprience' element={<WorkExprience />} />
      </Routes>
    </Router>
  );
}
