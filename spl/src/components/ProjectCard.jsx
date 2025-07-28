import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({
                                        name,
                                        category,
                                        github,
                                        onDetails // You can now ignore this prop if using navigate here!
                                    }) {
    const navigate = useNavigate();

    function handleDetails() {
        navigate("/project-dashboard");
    }

    return (
        <div className="project-card">
            <div className="project-card-header">
                <h3 className="project-title">{name}</h3>
                <span className="project-category">{category}</span>
            </div>
            <div className="project-card-footer">
                <a
                    className="project-github-link"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
                <button className="project-details-btn" onClick={handleDetails}>
                    Details
                </button>
            </div>
        </div>
    );
}
