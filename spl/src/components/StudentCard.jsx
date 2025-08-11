import React from "react";
import "../Styles/StudentCard.css";

export default function StudentCard({ name, ID, email }) {
    return (
        <div className="student-card">
            <div className="student-card-header">
                <h3 className="student-name">{name}</h3>
                <span className="student-id">ID: {ID}</span>
            </div>
            <div className="student-card-footer">
                <span className="student-email">{email}</span>
            </div>
        </div>
    );
}
