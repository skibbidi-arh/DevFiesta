import React, { useState } from "react";

export default function WeeklyMarkingForm({ teams, onSave }) {
    // Store marks in local state until saved
    const [marks, setMarks] = useState({});

    const handleInputChange = (teamId, memberName, field, value) => {
        setMarks((prev) => ({
            ...prev,
            [`${teamId}-${memberName}`]: {
                ...prev[`${teamId}-${memberName}`],
                [field]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(marks);
    };

    return (
        <form className="marking-form" onSubmit={handleSubmit}>
            {teams.map((team) => (
                <div key={team.id} className="marking-team-section">
                    <div className="marking-team-title">{team.name}</div>
                    {team.members.map((member, idx) => (
                        <div key={idx} className="marking-member-card">
                            <div className="marking-member-name">{member.name}</div>
                            <div className="marking-input-row">
                                <label>
                                    Attendance Mark (0-10):{" "}
                                    <input
                                        type="number"
                                        min="0"
                                        max="10"
                                        value={marks[`${team.id}-${member.name}`]?.attendance || ""}
                                        onChange={(e) =>
                                            handleInputChange(team.id, member.name, "attendance", e.target.value)
                                        }
                                        required
                                    />
                                </label>
                                <label>
                                    Contribution Mark (0-10):{" "}
                                    <input
                                        type="number"
                                        min="0"
                                        max="10"
                                        value={marks[`${team.id}-${member.name}`]?.contribution || ""}
                                        onChange={(e) =>
                                            handleInputChange(team.id, member.name, "contribution", e.target.value)
                                        }
                                        required
                                    />
                                </label>
                            </div>
                            <label>
                                Comments: <br />
                                <textarea
                                    rows={2}
                                    value={marks[`${team.id}-${member.name}`]?.comments || ""}
                                    onChange={(e) =>
                                        handleInputChange(team.id, member.name, "comments", e.target.value)
                                    }
                                    placeholder="Any comments..."
                                />
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <div className="marking-btn-row">
                <button type="submit" className="marking-submit-btn">
                    Submit All Marks
                </button>
            </div>
        </form>
    );
}
