import React from "react";

export default function TeamCard({ team }) {
    return (
        <div className="team-card">
            <div className="team-card-header">
                <div>
                    <div className="team-card-title">{team.name}</div>
                    <div className="team-card-desc">{team.project}</div>
                </div>
                <div className="team-card-badge">{team.members.length} members</div>
            </div>
            <div className="team-card-content">
                <div className="team-members-list">
                    {team.members.map((member, idx) => (
                        <div key={idx} className="team-member">
                            <div className="team-member-name">{member.name}</div>
                            <div className="team-member-info">
                                <span>Attendance: {member.attendance}%</span>
                                <span>Contribution: {member.contribution}%</span>
                            </div>
                            {member.weeklyMark && (
                                <div className="team-member-mark">
                                    <b>Attendance Mark:</b> {member.weeklyMark.attendance} / 10<br />
                                    <b>Contribution Mark:</b> {member.weeklyMark.contribution} / 10<br />
                                    <b>Comments:</b> {member.weeklyMark.comments}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="team-links">
                    <a href={team.githubLink} target="_blank" rel="noopener noreferrer" className="team-link-btn">
                        GitHub Repository
                    </a>
                    <a href={team.slidesLink} target="_blank" rel="noopener noreferrer" className="team-link-btn">
                        Project Slides
                    </a>
                </div>
                <div className="team-last-update">
                    Last updated: {team.lastUpdate}
                </div>
            </div>
        </div>
    );
}
