// routing.jsx in the Routes folder
import React, { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Loginpage from '../Pages/loginPage';
import ProjectDashboard from '../Pages/ProjectDashboard.jsx';
import SupervisorDashboard from "../Pages/SupervisorDashboard";
import StudentPersonal from "../Pages/StudentPersonal";
import Spladmin from "../Pages/SPLAdminPage";
import Evaluator from "../Pages/evaluatorPage";




function AppRoutes() {``
    return (
        <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path ="/supervisor-dashboard" element={<SupervisorDashboard />}  />
            <Route path="/project-dashboard" element={<ProjectDashboard />} />
            <Route path="/student-personal" element={<StudentPersonal />} />
            <Route path="/SPLadmin" element={<Spladmin />} />
            <Route path="/Eval" element={<Evaluator />} />

        </Routes>
    );
}

export default AppRoutes;
