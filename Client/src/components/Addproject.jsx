import '../layouts/Addproject.css';

import React, { useEffect, useState } from 'react';

const STORAGE_KEYS = {
    projectName: 'cofiesta_projectName',
    projectGenre: 'cofiesta_projectGenre',
    repo: 'cofiesta_repo',
    motivation: 'cofiesta_motivation',
    overview: 'cofiesta_overview',
    features: 'cofiesta_features'
};

export default function Addproject() {
    const [projectName, setProjectName] = useState('');
    const [projectGenre, setProjectGenre] = useState('');
    const [repo, setRepo] = useState('');
    const [motivation, setMotivation] = useState('');
    const [overview, setOverview] = useState('');
    const [features, setFeatures] = useState([]);
    const [newFeature, setNewFeature] = useState('');

    useEffect(() => {
        setProjectName(localStorage.getItem(STORAGE_KEYS.projectName) || '');
        setProjectGenre(localStorage.getItem(STORAGE_KEYS.projectGenre) || '');
        setRepo(localStorage.getItem(STORAGE_KEYS.repo) || '');
        setMotivation(localStorage.getItem(STORAGE_KEYS.motivation) || '');
        setOverview(localStorage.getItem(STORAGE_KEYS.overview) || '');
        setFeatures(JSON.parse(localStorage.getItem(STORAGE_KEYS.features) || '[]'));
    }, []);

    useEffect(() => localStorage.setItem(STORAGE_KEYS.projectName, projectName), [projectName]);
    useEffect(() => localStorage.setItem(STORAGE_KEYS.projectGenre, projectGenre), [projectGenre]);
    useEffect(() => localStorage.setItem(STORAGE_KEYS.repo, repo), [repo]);
    useEffect(() => localStorage.setItem(STORAGE_KEYS.motivation, motivation), [motivation]);
    useEffect(() => localStorage.setItem(STORAGE_KEYS.overview, overview), [overview]);
    useEffect(() => localStorage.setItem(STORAGE_KEYS.features, JSON.stringify(features)), [features]);

    const addFeature = () => {
        if (newFeature.trim()) {
            setFeatures([...features, newFeature.trim()]);
            setNewFeature('');
        }
    };

    const removeFeature = index => {
        const updated = features.filter((_, i) => i !== index);
        setFeatures(updated);
    };

    const openRepo = () => {
        if (/^https?:\/\//i.test(repo)) {
            window.open(repo, '_blank');
        } else {
            alert('Please enter a valid repository URL.');
        }
    };

    return (
        <div className="main-bg">
            <div className="header">
                <img src="https://i.imgur.com/J8ixBpn.png" className="logo" alt="logo" />
                <div className="title">DevFiesta</div>
            </div>

            <div className="content-area">

                {/* Project Name & Genre */}
                <div className="section">
                    <div className="section-label">Project Info</div>
                    <div className="project-info-row">
                        <div className="project-info-labels">
                            <div className="project-name-label">Project Name:</div>
                            <div className="project-genre-label">Project Genre:</div>
                        </div>
                        <div className="project-info-inputs">
                            <input
                                type="text"
                                value={projectName}
                                onChange={e => setProjectName(e.target.value)}
                                placeholder="Enter project name"
                                className="project-name-input"
                            />
                            <input
                                type="text"
                                value={projectGenre}
                                onChange={e => setProjectGenre(e.target.value)}
                                placeholder="e.g. Web App, Mobile App, Game, Tool"
                                className="project-genre-input"
                            />
                        </div>
                    </div>
                </div>

                {/* Repo Section */}
                <div className="section">
                    <div className="section-label">Github Repo</div>
                    <div className="repo-row">
                        <input type="url" value={repo} onChange={e => setRepo(e.target.value)} placeholder="Enter Github repo URL" onKeyDown={e => e.key === 'Enter' && openRepo()} />
                        <button className="repo-link-btn" onClick={openRepo}>Open</button>
                    </div>
                    <button className="stats-btn" onClick={() => alert('Show contribution and stats popup (demo)!')}>See contribution and stats</button>
                </div>

                {/* Motivation */}
                <div className="section">
                    <div className="section-label">Motivation</div>
                    <textarea value={motivation} onChange={e => setMotivation(e.target.value)} placeholder="Enter motivation here..." />
                </div>

                {/* Overview */}
                <div className="section">
                    <div className="section-label">Overview</div>
                    <textarea value={overview} onChange={e => setOverview(e.target.value)} placeholder="Enter overview here..." />
                </div>

                {/* Features */}
                <div className="section features-section">
                    <div className="section-label">Features</div>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                        <input type="text" id="featureInput" placeholder="Type a new feature..." value={newFeature} onChange={e => setNewFeature(e.target.value)} onKeyDown={e => e.key === 'Enter' && addFeature()} />
                        <button id="addFeatureBtn" onClick={addFeature}>Add</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {features.length === 0 ? (
                            <div style={{ color: '#767676', fontSize: '1.07rem', marginTop: '15px' }}>No features added yet.</div>
                        ) : (
                            features.map((feature, idx) => (
                                <div key={idx} className="feature-box">
                                    <div className="feature-text">{feature}</div>
                                    <button className="remove-feature-btn" onClick={() => removeFeature(idx)}>✕</button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
