import React from "react";
import "./hostingpage.css";

function App() {
    return (
        <div className="main-wrapper">
            {/* Header */}
            <header className="header">
                <div className="logo-section">
                    <img src="/logo.png" alt="DevFiesta Logo" className="logo" />
                    <span className="logo-text">DevFiesta</span>
                </div>
            </header>

            {/* Content */}
            <div className="content">
                <h2 className="heading">Start your Hosting Journey.</h2>
                <div className="button-group">
                    <button className="action-button">Host A hackathon</button>
                    <button className="action-button">Host A PBL</button>
                </div>
            </div>
        </div>
    );
}

export default App;
