import React, { useState } from "react";
import "../Styles/evalPage.css";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("teams");
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

    const statCards = [
        { label: "Total Teams", value: "12", colorClass: "c-sky", emoji: "👥" },
        { label: "Supervisors", value: "8", colorClass: "c-green", emoji: "✅" },
        { label: "Evaluators", value: "6", colorClass: "c-purple", emoji: "📋" },
        { label: "Students", value: "36", colorClass: "c-orange", emoji: "🎓" },
    ];

    return (
        <div className="page">



            <main className="container content">
                {/* Stats */}
                <section className="grid">
                    {statCards.map((card, i) => (
                        <article key={i} className="card card-hover">
                            <div className="card-body">
                                <div className="stat-row">
                                    <div>
                                        <p className="muted sm">{card.label}</p>
                                        <p className={`stat ${card.colorClass}`}>{card.value}</p>
                                    </div>
                                    <div className="emoji">{card.emoji}</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                {/* Tabs */}
                <section className="tabs">
                    <div className="tab-bar">
                        <button
                            type="button"
                            onClick={() => setActiveTab("teams")}
                            className={`tab ${activeTab === "teams" ? "active" : ""}`}
                        >
                            Teams Management
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("evaluations")}
                            className={`tab ${activeTab === "evaluations" ? "active" : ""}`}
                        >
                            Evaluation Criteria
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("reports")}
                            className={`tab ${activeTab === "reports" ? "active" : ""}`}
                        >
                            Reports &amp; Export
                        </button>
                    </div>

                    {/* Teams */}
                    {activeTab === "teams" && (
                        <div className="card">
                            <div className="card-header">
                                <div className="card-header-row">
                                    <div>
                                        <h2 className="h2">Teams Management</h2>
                                        <p className="muted sm">Create and manage student teams</p>
                                    </div>
                                    <button type="button" className="btn btn-primary">
                                        <span className="icon-left" aria-hidden>＋</span>
                                        Create Team
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="stack">
                                    {teams.map((team) => (
                                        <div key={team.id} className="item card item-hover">
                                            <div className="item-row">
                                                <div className="item-main">
                                                    <div className="item-title">
                                                        <h3 className="h3">{team.name}</h3>
                                                        <span className="badge">{team.members.length} members</span>
                                                    </div>
                                                    <p className="muted">Project: {team.project}</p>

                                                    <div className="cols">
                                                        <div className="col">
                                                            <p className="label">Members:</p>
                                                            <ul className="list">
                                                                {team.members.map((m, idx) => (
                                                                    <li key={idx}>{m}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <p className="label">Supervisor:</p>
                                                            <p className="muted">{team.supervisor}</p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="label">Evaluators:</p>
                                                            <ul className="list">
                                                                {team.evaluators.map((e, idx) => (
                                                                    <li key={idx}>{e}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-actions">
                                                    <button className="icon-btn c-sky" title="View">👁️</button>
                                                    <button className="icon-btn" title="Edit">✏️</button>
                                                    <button className="icon-btn c-red" title="Delete">🗑️</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Evaluations */}
                    {activeTab === "evaluations" && (
                        <div className="card">
                            <div className="card-header">
                                <div className="card-header-row">
                                    <div>
                                        <h2 className="h2">Evaluation Criteria</h2>
                                        <p className="muted sm">Define and manage evaluation criteria with weightage</p>
                                    </div>
                                    <button type="button" className="btn btn-primary">
                                        <span className="icon-left" aria-hidden>＋</span>
                                        Add Criteria
                                    </button>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="stack">
                                    {evaluationCriteria.map((c, idx) => (
                                        <div key={idx} className="row card row-hover">
                                            <div>
                                                <h3 className="h3">{c.name}</h3>
                                                <p className="muted sm">Weight: {c.weight}%</p>
                                            </div>
                                            <div className="row-actions">
                                                <button className="icon-btn" title="Edit">✏️</button>
                                                <button className="icon-btn c-red" title="Delete">🗑️</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Reports */}
                    {activeTab === "reports" && (
                        <div className="card">
                            <div className="card-header">
                                <h2 className="h2">Reports &amp; Export</h2>
                                <p className="muted sm">Generate and export project reports and marksheets</p>
                            </div>

                            <div className="card-body">
                                <div className="two-cols">
                                    <div className="stack">
                                        <h3 className="h3">Available Reports</h3>
                                        <button className="btn btn-outline left">
                                            <span className="icon-left" aria-hidden>⬇️</span>
                                            Export All Teams Data
                                        </button>
                                        <button className="btn btn-outline left">
                                            <span className="icon-left" aria-hidden>⬇️</span>
                                            Export Evaluation Results
                                        </button>
                                        <button className="btn btn-outline left">
                                            <span className="icon-left" aria-hidden>⬇️</span>
                                            Export Student Marksheets
                                        </button>
                                        <button className="btn btn-outline left">
                                            <span className="icon-left" aria-hidden>⬇️</span>
                                            Export Project Summary
                                        </button>
                                    </div>

                                    <div className="stack">
                                        <h3 className="h3">Quick Stats</h3>
                                        <div className="panel">
                                            <div className="pair">
                                                <span className="muted">Completed Evaluations:</span>
                                                <span className="bold">24/36</span>
                                            </div>
                                            <div className="pair">
                                                <span className="muted">Average Score:</span>
                                                <span className="bold">78.5%</span>
                                            </div>
                                            <div className="pair">
                                                <span className="muted">Projects Submitted:</span>
                                                <span className="bold">12/12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
