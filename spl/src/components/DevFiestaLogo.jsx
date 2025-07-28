import React from "react";

export default function DevFiestaLogo({ style = {} }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            background: "#f6fafd", // soft background to match screenshot
            padding: "10px 0"
        }}>
            {/* Pacman Icon */}
            <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                style={{ flexShrink: 0 }}
            >
                {/* Main circle */}
                <circle cx="40" cy="40" r="35" fill="#5F85F0" />
                {/* Mouth (triangle slice) */}
                <polygon points="40,40 75,15 75,65" fill="white" />
                {/* Eye */}
                <circle cx="28" cy="23" r="4" fill="white" />
            </svg>
            {/* Logo Text */}
            <span style={{
                color: "#5F85F0",
                fontFamily: "Times New Roman, serif",
                fontWeight: 700,
                fontSize: "2.6rem",
                letterSpacing: "1px",
                lineHeight: 1,
                textShadow: "0 2px 8px #0001",
            }}>
        DevFiesta
      </span>
        </div>
    );
}
