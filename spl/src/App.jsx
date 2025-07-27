// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/routing";
import StudentDashboard from "./Pages/StudentDashboard";
import LoginPage from "./Pages/loginPage";
import { Link } from 'react-router-dom'

 function App() {
    return (

            <AppRoutes />

    );
}

export default App;
