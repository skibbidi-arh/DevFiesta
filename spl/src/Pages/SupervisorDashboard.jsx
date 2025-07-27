import React, { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import WeeklyMarkingForm from "../components/WeeklyMarkingForm";
import "../styles/SupervisorDashboard.css";

export default function SupervisorDashboard() {
    const [teams, setTeams] = useState([]);
    const [activeTab, setActiveTab] = useState("teams");


    useEffect(() => {

        const fetchTeams = async () => {

            const data = [
                {
                    id: 1,
                    name: "Team Alpha",
                    members: [
                        { name: "John Doe", attendance: 85, contribution: 90 },
                        { name: "Jane Smith", attendance: 92, contribution: 88 },
                        { name: "Bob Johnson", attendance: 78, contribution: 82 },
                    ],
                    project: "E-commerce Platform",
                    githubLink: "https://github.com/team-alpha/ecommerce",
                    slidesLink: "https://drive.google.com/team-alpha-slides",
                    lastUpdate: "2 days ago",
                },
                {
                    id: 2,
                    name: "Team Gamma",
                    members: [
                        { name: "Alice Cooper", attendance: 88, contribution: 85 },
                        { name: "Mike Ross", attendance: 95, contribution: 92 },
                        { name: "Sarah Connor", attendance: 90, contribution: 89 },
                    ],
                    project: "Task Management App",
                    githubLink: "https://github.com/team-gamma/taskmanager",
                    slidesLink: "https://drive.google.com/team-gamma-slides",
                    lastUpdate: "1 day ago",
                },

                {
                    id: 2,
                    name: "Team X",
                    members: [
                        { name: "Zafor", attendance: 88, contribution: 85 },
                        { name: "Utsho", attendance: 95, contribution: 92 },
                        { name: "Ahir", attendance: 90, contribution: 89 },
                    ],
                    project: "Task Management App",
                    githubLink: "https://github.com/team-gamma/taskmanager",
                    slidesLink: "https://drive.google.com/team-gamma-slides",
                    lastUpdate: "1 day ago",
                },
            ];
            setTeams(data);
        };

        fetchTeams();
    }, []);


    useEffect(() => {
        const savedMarks = localStorage.getItem("weeklyMarks");
        if (savedMarks) {
            // Attach weekly marks to team members
            const marks = JSON.parse(savedMarks);
            setTeams((prev) =>
                prev.map((team) => ({
                    ...team,
                    members: team.members.map((m) => ({
                        ...m,
                        weeklyMark: marks[`${team.id}-${m.name}`] || null,
                    })),
                }))
            );
        }
    }, []);

    // Save weekly marks to localStorage
    const handleSaveWeeklyMarks = (marks) => {
        localStorage.setItem("weeklyMarks", JSON.stringify(marks));

        setTeams((prev) =>
            prev.map((team) => ({
                ...team,
                members: team.members.map((m) => ({
                    ...m,
                    weeklyMark: marks[`${team.id}-${m.name}`] || null,
                })),
            }))
        );
        setActiveTab("teams");
    };

    // Count total students
    const totalStudents = teams.reduce((acc, t) => acc + t.members.length, 0);

    return (
        <div className="sd-bg">
            {/* Header */}
            <header className="sd-header">
                <div className="sd-header-left">
                    <div className="sd-logo">🎓</div>
                    <div>
                        <div className="sd-title">SPL Automation System</div>
                        <div className="sd-subtitle">Supervisor Dashboard</div>
                    </div>
                </div>
                <div className="sd-header-right">
                    <span>Welcome, Dr. Wilson</span>
                    <button className="sd-logout-btn">Logout</button>
                </div>
            </header>

            <main className="sd-main">
                {/* Stat Cards */}
                <div className="sd-stats">
                    <div className="sd-stat-card">
                        <div className="sd-stat-label">Assigned Teams</div>
                        <div className="sd-stat-value">{teams.length}</div>
                    </div>
                    <div className="sd-stat-card">
                        <div className="sd-stat-label">Total Students</div>
                        <div className="sd-stat-value">{totalStudents}</div>
                    </div>
                    <div className="sd-stat-card">
                        <div className="sd-stat-label">This Week</div>
                        <div className="sd-stat-value">Week 8</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="sd-tabs">
                    <button
                        className={`sd-tab-btn ${activeTab === "teams" ? "active" : ""}`}
                        onClick={() => setActiveTab("teams")}
                    >
                        My Teams
                    </button>
                    <button
                        className={`sd-tab-btn ${activeTab === "marking" ? "active" : ""}`}
                        onClick={() => setActiveTab("marking")}
                    >
                        Weekly Marking
                    </button>
                </div>

                {/* Content */}
                <div className="sd-tab-content">
                    {activeTab === "teams" ? (
                        <div className="sd-team-list">
                            {teams.map((team) => (
                                <TeamCard key={team.id} team={team} />
                            ))}
                        </div>
                    ) : (
                        <WeeklyMarkingForm teams={teams} onSave={handleSaveWeeklyMarks} />
                    )}
                </div>
            </main>
        </div>
    );
}
