// routing.jsx in the Routes folder
import React, { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Loginpage from '../Pages/loginPage';
import StudentDashboard from '../Pages/StudentDashboard';
import SupervisorDashboard from "../Pages/SupervisorDashboard.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path ="/supervisor-dashboard" element={<SupervisorDashboard />}  />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
    );
}

export default AppRoutes;
