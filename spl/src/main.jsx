import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './Pages/loginPage';
import StudentDashboardPage from './Pages/StudentDashboard';
import './Styles/StudentDashboard.css';
import './Styles/LoginPage.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StudentDashboardPage />
    </React.StrictMode>
);
