import React from "react";
import "../Styles/StudentPersonal.css";
import "../Styles/ProjectCard.css";
import DevFiestaLogo from "../components/DevFiestaLogo";
import ProjectCard from "../components/ProjectCard";

function handleDetails(projectId) {
    window.location.href = `/project-details/${projectId}`;
}

export default function PersonalDashboard() {
    const [name, setName] = React.useState("");
    const [ID, setID] = React.useState("");
    // === Pre-populate with 3 demo projects ===
    const [projects, setProjects] = React.useState([
        {
            id: 1,
            name: "Devfiesta",
            category: "Web Application",
            github: "https://github.com/arhamapon/student-dashboard"
        },
        {
            id: 2,
            name: "EduPro",
            category: "Educational Platform",
            github: "https://github.com/arhamapon/edupro"
        },
        {
            id: 3,
            name: "FitTrack",
            category: "Fitness Tracker",
            github: "https://github.com/arhamapon/fittrack"
        }
    ]);
    const username = "Arham Apon";

    React.useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${username}`);
                const data = await res.json();
                setName(data.name || username);
                setID(data.id || "N/A");
            } catch (err) {
                setName("User not found");
                setID("N/A");
            }
        };
        fetchProfile();
    }, [username]);

    // === Uncomment this to fetch from your backend when it's ready ===
    /*
    React.useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/projects");
                const data = await res.json();
                setProjects(data.projects || []);
            } catch (err) {
                setProjects([]);
            }
        };
        fetchProjects();
    }, []);
    */

    return (
        <div className="personal-bg">
            <div className="personal-header">
                <div className="personal-logo-circle">
                    <DevFiestaLogo />
                </div>
                <h2>Personal Dashboard</h2>
                <p className="personal-name">{name}</p>
            </div>
            <div className="personal-info">Student ID : {ID}</div>

            <div className="personal-details"></div>

            <div className="projects-list">
                {projects.length === 0 ? (
                    <p style={{ textAlign: "center", marginTop: "32px" }}>No projects found.</p>
                ) : (
                    projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            category={project.category}
                            github={project.github}
                            onDetails={() => handleDetails(project.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
