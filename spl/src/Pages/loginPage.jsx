import React, { useState } from "react";
import {Link} from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import "../Styles/LoginPage.css";

export default function LoginPage() {
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (role === "student") {
            navigate("/student-personal");
        }
        else if (role === "supervisor") {
            navigate("/supervisor-dashboard");
        }
        else if (role === "admin") {
            navigate("/SPLAdmin");
        }


    };
    return (
        <div className="login-bg">
            <div className="login-header">
                <div className="logo-circle">
                    <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="20" fill="#22BAF2"/>
                        <path d="M24 14L40 22L24 30L8 22L24 14Z" fill="white"/>
                        <path d="M24 30V36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M16 26V32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M32 26V32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                <h2>SPL Automation System</h2>
                <p className="sub-title">Software Project Lab Management</p>
            </div>
            <div className="login-box">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h3>Log In</h3>
                    <p className="form-sub">
                        Enter your credentials
                    </p>
                    <label>Select Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >

                        <option value="admin">Admin (SPL In-Charge)</option>
                        <option value="supervisor">Supervisor</option>
                        <option value="evaluator">Evaluator</option>
                        <option value="student">Student</option>
                    </select>
                    <label>Email</label>
                    <div className="input-with-icon">
            <span className="input-icon">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="4" stroke="#A6A6A6" strokeWidth="1.2"/>
                <path d="M2 16C2 13.2386 5.58172 11 10 11C14.4183 11 18 13.2386 18 16" stroke="#A6A6A6" strokeWidth="1.2"/>
              </svg>
            </span>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <label>Password</label>
                    <div className="input-with-icon">
            <span className="input-icon">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <rect x="4" y="9" width="12" height="7" rx="2" stroke="#A6A6A6" strokeWidth="1.2"/>
                <path d="M10 13V15" stroke="#A6A6A6" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M7 9V7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7V9" stroke="#A6A6A6" strokeWidth="1.2"/>
              </svg>
            </span>
                        <input type="password" placeholder="Enter your password" required />

                    </div>
                    <input type="submit" value="Login"/>

                </form>
            </div>
        </div>
    );
}
