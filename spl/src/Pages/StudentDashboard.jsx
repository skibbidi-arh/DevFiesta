

import React, { useState } from "react";
import {
    FaUsers, FaUpload, FaGithub, FaFileAlt, FaStar, FaGraduationCap,
    FaSignOutAlt, FaExternalLinkAlt, FaCheckCircle, FaClock, FaExclamationCircle
} from "react-icons/fa";
import "../Styles/StudentDashboard.css";

export default function StudentDashboard() {
    const [teamInfo] = useState({
        name: "Team Alpha",
        members: ["John Doe (You)", "Jane Smith", "Bob Johnson"],
        supervisor: "Dr. Wilson",
        evaluators: ["Prof. Davis", "Dr. Brown"],
        project: "E-commerce Platform",
    });

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
                        <span className="sd-welcome">Welcome, John Doe</span>
                        <button className="sd-btn sd-btn-ghost">
                            <FaSignOutAlt className="sd-btn-icon" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <div className="sd-container">
                {/* Team Info Card */}
                <div className="sd-card mb">
                    <div className="sd-card-header">
            <span className="sd-card-title">
              <FaUsers className="sd-card-icon" />
                {teamInfo.name}
            </span>
                        <span className="sd-card-desc">{teamInfo.project}</span>
                    </div>
                    <div className="sd-card-content sd-grid-3">
                        <div>
                            <h4 className="sd-section-title">Team Members</h4>
                            <ul>
                                {teamInfo.members.map((member, idx) => (
                                    <li key={idx} className="sd-list-item">
                                        <span className="sd-dot"></span>{member}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="sd-section-title">Supervisor</h4>
                            <p>{teamInfo.supervisor}</p>
                        </div>
                        <div>
                            <h4 className="sd-section-title">Evaluators</h4>
                            <ul>
                                {teamInfo.evaluators.map((evaluator, idx) => (
                                    <li key={idx}>{evaluator}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Progress Overview */}
                <div className="sd-grid-3 mb">
                    <div className="sd-card">
                        <div className="sd-card-content">
                            <div className="sd-row-between mb-small">
                                <span className="sd-label">Overall Progress</span>
                                <span className="sd-big sd-blue">67%</span>
                            </div>
                            <div className="sd-progress">
                                <div className="sd-progress-bar" style={{ width: '67%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-card">
                        <div className="sd-card-content">
                            <div className="sd-row-between">
                                <div>
                                    <span className="sd-label">Average Score</span>
                                    <div className="sd-big sd-green">81.5</div>
                                </div>
                                <FaStar className="sd-star" />
                            </div>
                        </div>
                    </div>
                    <div className="sd-card">
                        <div className="sd-card-content">
                            <div className="sd-row-between">
                                <div>
                                    <span className="sd-label">Submissions</span>
                                    <div className="sd-big sd-purple">2/3</div>
                                </div>
                                <FaFileAlt className="sd-purple-icon" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Tabs */}
                <div className="sd-tabs">
                    <div className="sd-tabs-list">
                        <button
                            className={activeTab === "submissions" ? "sd-tab-active" : ""}
                            onClick={() => setActiveTab("submissions")}
                        >Submissions</button>
                        <button
                            className={activeTab === "github" ? "sd-tab-active" : ""}
                            onClick={() => setActiveTab("github")}
                        >GitHub Repository</button>
                        <button
                            className={activeTab === "marks" ? "sd-tab-active" : ""}
                            onClick={() => setActiveTab("marks")}
                        >Marks & Feedback</button>
                    </div>

                    {/* Submissions Tab */}
                    {activeTab === "submissions" && (
                        <div className="sd-tab-content">
                            <div className="sd-card">
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
                        </div>
                    )}

                    {/* GitHub Tab */}
                    {activeTab === "github" && (
                        <div className="sd-tab-content">
                            <div className="sd-card">
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
                                        <div className="sd-card-inner">
                                            <h5 className="sd-card-inner-title">Total Commits</h5>
                                            <p className="sd-big sd-blue">127</p>
                                        </div>
                                        <div className="sd-card-inner">
                                            <h5 className="sd-card-inner-title">Your Commits</h5>
                                            <p className="sd-big sd-green">45</p>
                                        </div>
                                        <div className="sd-card-inner">
                                            <h5 className="sd-card-inner-title">Last Update</h5>
                                            <p className="sd-label">2 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Marks Tab */}
                    {activeTab === "marks" && (
                        <div className="sd-tab-content">
                            <div className="sd-card">
                                <div className="sd-card-header">
                                    <span className="sd-card-title">Marks & Feedback</span>
                                    <span className="sd-card-desc">View your evaluation results and feedback</span>
                                </div>
                                <div className="sd-card-content">
                                    {submissions.filter((s) => s.marks !== null).map((submission, idx) => (
                                        <div key={idx} className="sd-submission">
                                            <div className="sd-row-between mb-small">
                                                <span className="sd-submission-title">{submission.type}</span>
                                                <div className="sd-text-right">
                                                    <div className="sd-big sd-blue">{submission.marks}/100</div>
                                                    <div className="sd-label">
                                                        Grade: {submission.marks >= 80 ? "A" : submission.marks >= 70 ? "B" : "C"}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sd-grid-2">
                                                <div>
                                                    <h4 className="sd-section-title">Breakdown</h4>
                                                    <div className="sd-breakdown">
                                                        <div><span>Technical Implementation:</span> <span>32/40</span></div>
                                                        <div><span>Innovation & Creativity:</span> <span>20/25</span></div>
                                                        <div><span>Presentation Quality:</span> <span>18/20</span></div>
                                                        <div><span>Documentation:</span> <span>15/15</span></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="sd-section-title">Feedback</h4>
                                                    <div className="sd-feedback">
                                                        "Excellent technical implementation with clean code structure. The presentation was well-organized and clear. Consider adding more innovative features for future iterations."
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Weekly Supervisor Marks */}
                                    <div className="sd-submission">
                                        <h3 className="sd-section-title mb-small">Weekly Assessment (Supervisor)</h3>
                                        <div className="sd-grid-2">
                                            <div>
                                                <h4 className="sd-section-title">Recent Weeks</h4>
                                                <div className="sd-breakdown">
                                                    <div><span>Week 8 - Attendance:</span> <span>9/10</span></div>
                                                    <div><span>Week 8 - Contribution:</span> <span>8/10</span></div>
                                                    <div><span>Week 7 - Attendance:</span> <span>10/10</span></div>
                                                    <div><span>Week 7 - Contribution:</span> <span>9/10</span></div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="sd-section-title">Average Scores</h4>
                                                <div className="sd-progress-info">
                                                    <div className="sd-row-between mb-tiny">
                                                        <span className="sd-label">Attendance</span>
                                                        <span className="sd-label">92%</span>
                                                    </div>
                                                    <div className="sd-progress"><div className="sd-progress-bar" style={{ width: '92%' }}></div></div>
                                                    <div className="sd-row-between mb-tiny mt-small">
                                                        <span className="sd-label">Contribution</span>
                                                        <span className="sd-label">88%</span>
                                                    </div>
                                                    <div className="sd-progress"><div className="sd-progress-bar" style={{ width: '88%' }}></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
