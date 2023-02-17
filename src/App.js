import React from 'react';
import Frontpage from './pages/Frontpage';
import Studentlogin from './pages/Studentlogin';
import {BrowserRouter as Router, Routes, Route}  from "react-router-dom";
import Facultylogin from './pages/Facultylogin';
import Dashboardstudent from './pages/Dashboardstudent';
import Dashboardfaculty from './pages/Dashboardfaculty';
import Gradefaculty from './pages/Gradefaculty';
import Gradestudent from './pages/Gradestudent';
import Accountstudent from './pages/Accountstudent';
import Accountfaculty from './pages/Accountfaculty';
import Schedule from './pages/Schedule';
import Facultyschedule from './pages/Facultyschedule';
import Enrollmentform from './pages/Enrollmentform';
import Enrolledlist from './pages/Enrolledlist';



function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/studentlogin" element={<Studentlogin/>}/>
        <Route path="/facultylogin" element={<Facultylogin/>}/>
        <Route path="/dashboardstudent" element={<Dashboardstudent/>}/>
        <Route path="/dashboardfaculty" element={<Dashboardfaculty/>}/>
        <Route path="/gradefaculty" element={<Gradefaculty/>}/>
        <Route path="/gradestudent" element={<Gradestudent/>}/>
        <Route path="/accountstudent" element={<Accountstudent/>}/>
        <Route path="/accountfaculty" element={<Accountfaculty/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/facultyschedule" element={<Facultyschedule/>}/>
        <Route path="/enrollmentform" element={<Enrollmentform/>}/>
        <Route path="/enrolledlist" element={<Enrolledlist/>}/>
        <Route path="/*" element={<h1>PAGE NOT FOUND</h1>}/>

      </Routes>
    </Router>
</div>
  );
}

export default App;
