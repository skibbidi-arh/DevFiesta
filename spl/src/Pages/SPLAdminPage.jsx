import React, { useState } from "react";
import { Users, UserCheck, ClipboardList, Plus, Download, Eye, Edit, Trash2, GraduationCap, LogOut } from "lucide-react";
import "../Styles/SPLAdminPage.css";

export default function AdminDashboard() {
    const [teams] = useState([
        {
            id: 1,
            name: "Team Alpha",
            members: ["John Doe", "Jane Smith", "Bob Johnson"],
            supervisor: "Dr. Wilson",
            evaluators: ["Prof. Davis", "Dr. Brown"],
            project: "E-commerce Platform",
        },
        {
            id: 2,
            name: "Team Beta",
            members: ["Alice Cooper", "Mike Ross", "Sarah Connor"],
            supervisor: "Dr. Anderson",
            evaluators: ["Prof. Miller", "Dr. Taylor"],
            project: "Learning Management System",
        },
    ]);

    const [evaluationCriteria] = useState([
        { name: "Technical Implementation", weight: 40 },
        { name: "Innovation & Creativity", weight: 25 },
        { name: "Presentation Quality", weight: 20 },
        { name: "Documentation", weight: 15 },
    ]);

    const [activeTab, setActiveTab] = useState("teams");

    return (
        <div className="admin-dashboard">
            {/* Header */}
            <header className="admin-header">
                <div className="admin-header-content">
                    <div className="admin-header-left">
                        <div className="admin-logo">
                            <GraduationCap className="admin-logo-icon" />
                        </div>
                        <div>
                            <h1 className="admin-title">SPL Automation System</h1>
                            <p className="admin-subtitle">Admin Dashboard</p>
                        </div>
                    </div>
                    <div className="admin-header-right">

                        <button className="admin-logout-btn">
                            <LogOut className="admin-logout-icon" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <div className="admin-content">
                {/* Stats Cards */}
                <div className="stats-cards">
                    <div className="stat-card">
                        <div className="stat-card-content">
                            <div>
                                <p className="stat-card-label">Total Teams</p>
                                <p className="stat-card-value">12</p>
                            </div>
                            <Users className="stat-card-icon" />
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card-content">
                            <div>
                                <p className="stat-card-label">Supervisors</p>
                                <p className="stat-card-value">8</p>
                            </div>
                            <UserCheck className="stat-card-icon" />
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card-content">
                            <div>
                                <p className="stat-card-label">Evaluators</p>
                                <p className="stat-card-value">6</p>
                            </div>
                            <ClipboardList className="stat-card-icon" />
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card-content">
                            <div>
                                <p className="stat-card-label">Students</p>
                                <p className="stat-card-value">36</p>
                            </div>
                            <GraduationCap className="stat-card-icon" />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="tabs">
                    <div className="tabs-header">
                        <button
                            className={`tab-trigger ${activeTab === "teams" ? "active" : ""}`}
                            onClick={() => setActiveTab("teams")}
                        >
                            Teams Management
                        </button>
                        <button
                            className={`tab-trigger ${activeTab === "evaluations" ? "active" : ""}`}
                            onClick={() => setActiveTab("evaluations")}
                        >
                            Evaluation Criteria
                        </button>
                        <button
                            className={`tab-trigger ${activeTab === "reports" ? "active" : ""}`}
                            onClick={() => setActiveTab("reports")}
                        >
                            Reports & Export
                        </button>
                    </div>

                    {/* Teams Management Tab */}
                    {activeTab === "teams" && (
                        <div className="tab-content">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-gray-900">Teams Management</h2>
                                <button className="btn-create-team">
                                    <Plus className="icon" />
                                    Create Team
                                </button>
                            </div>

                            <div className="team-list">
                                {teams.map((team) => (
                                    <div key={team.id} className="team-card">
                                        <div className="team-card-header">
                                            <h3 className="team-name">{team.name}</h3>
                                            <div className="badge">{team.members.length} members</div>
                                        </div>
                                        <p>Project: {team.project}</p>
                                        <p>Supervisor: {team.supervisor}</p>
                                        <p>Evaluators: {team.evaluators.join(", ")}</p>
                                        <div className="team-card-actions">
                                            <button className="action-btn"><Eye className="icon" /></button>
                                            <button className="action-btn"><Edit className="icon" /></button>
                                            <button className="action-btn"><Trash2 className="icon" /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Evaluation Criteria Tab */}
                    {activeTab === "evaluations" && (
                        <div className="tab-content">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-gray-900">Evaluation Criteria</h2>
                                <button className="btn-create-criteria">
                                    <Plus className="icon" />
                                    Add Criteria
                                </button>
                            </div>

                            <div className="criteria-list">
                                {evaluationCriteria.map((criteria, index) => (
                                    <div key={index} className="evaluation-item">
                                        <h3>{criteria.name}</h3>
                                        <p>Weight: {criteria.weight}%</p>
                                        <div className="evaluation-actions">
                                            <button className="action-btn"><Edit className="icon" /></button>
                                            <button className="action-btn"><Trash2 className="icon" /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Reports Tab */}
                    {activeTab === "reports" && (
                        <div className="tab-content">
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-900">Reports & Export</h2>
                                <button className="export-btn">Export All Teams Data</button>
                                <button className="export-btn">Export Evaluation Results</button>
                                <button className="export-btn">Export Student Marksheets</button>
                                <button className="export-btn">Export Project Summary</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
