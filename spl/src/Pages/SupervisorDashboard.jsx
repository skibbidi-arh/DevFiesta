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
                        Total Marking
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
