import React, { useState, useEffect } from "react";
import {
    FaUpload, FaGithub, FaFileAlt, FaGraduationCap,
    FaSignOutAlt, FaExternalLinkAlt, FaCheckCircle, FaClock, FaExclamationCircle
} from "react-icons/fa";
import "../Styles/ProjectDashboard.css";

export default function ProjectDashboard() {
    const [submissions] = useState([
        {
            type: "Proposal Presentation",
            dueDate: "2024-01-15",
            status: "submitted",
            uploadedFile: "proposal_slides.pdf",
            marks: 85,
        },
        {
            type: "Progress Presentation",
            dueDate: "2024-02-20",
            status: "submitted",
            uploadedFile: "progress_slides.pdf",
            marks: 78,
        },
        {
            type: "Final Presentation",
            dueDate: "2024-03-25",
            status: "pending",
            uploadedFile: null,
            marks: null,
        },
    ]);
    const [githubLink, setGithubLink] = useState("https://github.com/team-alpha/ecommerce");
    const [activeTab, setActiveTab] = useState("submissions");
    const [progress, setProgress] = useState(50);

    useEffect(() => {
        // Fake async progress
        fetch('/api/progress')
            .then(res => res.json())
            .then(data => setProgress(data.progress))
            .catch(() => setProgress(50));
    }, []);

    const total = submissions.length;
    const submitted = submissions.filter(sub => sub.status === "submitted").length;

    return (
        <div className="student-dashboard-bg">
            {/* Header */}
            <header className="sd-header">
                <div className="sd-header-content">
                    <div className="sd-header-left">
                        <div className="sd-logo"><FaGraduationCap /></div>
                        <div>
                            <h1 className="sd-title">SPL Automation System</h1>
                            <p className="sd-subtitle">Student Dashboard</p>
                        </div>
                    </div>
                    <div className="sd-header-right">
                        <button className="sd-btn sd-btn-ghost">
                            <FaSignOutAlt className="sd-btn-icon" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <div className="sd-container">
                {/* Progress Overview - optional: put your Team Info card here if needed */}
                <div className="sd-grid-3 mb">
                    <div className="sd-card">
                        <div className="sd-card-content">
                            <div className="sd-row-between mb-small">
                                <span className="sd-label">Overall Progress</span>
                                <span className="sd-big sd-blue">{progress}%</span>
                            </div>
                            <div className="sd-progress">
                                <div className="sd-progress-bar" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-card">
                        <div className="sd-card-content">
                            <div className="sd-row-between">
                                <div>
                                    <span className="sd-label">Submissions</span>
                                    <div className="sd-big sd-purple">{submitted}/{total}</div>
                                </div>
                                <FaFileAlt className="sd-purple-icon" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Row */}
                <div className="sd-tabs-row">
                    <button
                        className={`sd-tab-btn ${activeTab === "submissions" ? "sd-tab-active" : ""}`}
                        onClick={() => setActiveTab("submissions")}
                    >
                        Submissions
                    </button>
                    <button
                        className={`sd-tab-btn ${activeTab === "github" ? "sd-tab-active" : ""}`}
                        onClick={() => setActiveTab("github")}
                    >
                        GitHub Repository
                    </button>
                </div>

                {/* Centered Tab Content */}
                <div className="sd-tab-content-centered">
                    {activeTab === "submissions" && (
                        <div className="sd-card sd-card-wide">
                            <div className="sd-card-header">
                                <span className="sd-card-title">Presentation Submissions</span>
                                <span className="sd-card-desc">Upload your presentation slides for each phase</span>
                            </div>
                            <div className="sd-card-content">
                                {submissions.map((submission, idx) => (
                                    <div className="sd-submission" key={idx}>
                                        <div className="sd-row-between mb-small">
                                            <div>
                                                <span className="sd-submission-title">
                                                    {submission.type}
                                                    {submission.status === "submitted" && <FaCheckCircle className="sd-status-icon sd-green" />}
                                                    {submission.status === "pending" && <FaClock className="sd-status-icon sd-orange" />}
                                                </span>
                                                <p className="sd-label">Due: {submission.dueDate}</p>
                                            </div>
                                            <span
                                                className={
                                                    submission.status === "submitted"
                                                        ? "sd-badge sd-badge-green"
                                                        : "sd-badge sd-badge-orange"
                                                }
                                            >
                                                {submission.status}
                                            </span>
                                        </div>
                                        {submission.status === "submitted" ? (
                                            <div className="sd-file-info sd-file-info-success">
                                                <div className="sd-row-between">
                                                    <div className="sd-row">
                                                        <FaFileAlt className="sd-green mr" />
                                                        <span className="sd-green">{submission.uploadedFile}</span>
                                                    </div>
                                                    <div className="sd-row">
                                                        <button className="sd-btn sd-btn-outline">
                                                            <FaExternalLinkAlt className="sd-btn-icon" />
                                                            View
                                                        </button>
                                                        <button className="sd-btn sd-btn-outline">
                                                            <FaUpload className="sd-btn-icon" />
                                                            Replace
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="sd-file-info sd-file-info-warn">
                                                <div className="sd-row-between">
                                                    <div className="sd-row">
                                                        <FaExclamationCircle className="sd-orange mr" />
                                                        <span className="sd-orange">No file uploaded yet</span>
                                                    </div>
                                                    <button className="sd-btn sd-btn-main">
                                                        <FaUpload className="sd-btn-icon" />
                                                        Upload File
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "github" && (
                        <div className="sd-card sd-card-wide">
                            <div className="sd-card-header">
                                <span className="sd-card-title">GitHub Repository</span>
                                <span className="sd-card-desc">Manage your project's GitHub repository link</span>
                            </div>
                            <div className="sd-card-content">
                                <div>
                                    <label htmlFor="github-link" className="sd-label">Repository URL</label>
                                    <div className="sd-row">
                                        <input
                                            id="github-link"
                                            value={githubLink}
                                            onChange={(e) => setGithubLink(e.target.value)}
                                            placeholder="https://github.com/username/repository"
                                            className="sd-input"
                                        />
                                        <button className="sd-btn sd-btn-main">Update</button>
                                    </div>
                                </div>
                                <div className="sd-file-info">
                                    <div className="sd-row-between mb-small">
                                        <h4 className="sd-section-title">Current Repository</h4>
                                        <a
                                            href={githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sd-btn sd-btn-outline"
                                        >
                                            <FaGithub className="sd-btn-icon" />
                                            Visit Repository
                                            <FaExternalLinkAlt className="sd-btn-icon-sm" />
                                        </a>
                                    </div>
                                    <p className="sd-label sd-break-all">{githubLink}</p>
                                </div>
                                <div className="sd-grid-3">
                                   

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
