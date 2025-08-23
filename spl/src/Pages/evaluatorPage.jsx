import React, { useMemo, useState } from "react";
import "../Styles/evalPage.css"; // reuse the same theme

export default function EvaluatorPage() {
    // --- Demo data (plug in your real data source later) ---
    const teams = [
        {
            id: 1,
            name: "Team Alpha",
            members: ["John Doe", "Jane Smith", "Bob Johnson"],
            supervisor: "Dr. Wilson",
            project: "E-commerce Platform",
        },
        {
            id: 2,
            name: "Team Beta",
            members: ["Alice Cooper", "Mike Ross", "Sarah Connor"],
            supervisor: "Dr. Anderson",
            project: "Learning Management System",
        },
    ];

    // Weighted rubric (weights must sum to 100)
    const rubric = [
        { key: "tech", label: "Technical Implementation", weight: 40, hint: "Correctness, architecture, testing" },
        { key: "innovation", label: "Innovation & Creativity", weight: 25, hint: "Originality, problem framing" },
        { key: "presentation", label: "Presentation Quality", weight: 20, hint: "Clarity, structure, visuals, demo" },
        { key: "docs", label: "Documentation", weight: 15, hint: "Readme, setup, code comments" },
    ];

    // --- UI state ---
    const [selectedTeamId, setSelectedTeamId] = useState(teams[0]?.id ?? null);
    const [selectedMember, setSelectedMember] = useState(teams[0]?.members[0] ?? "");
    const [scores, setScores] = useState(() =>
        rubric.reduce((acc, r) => ({ ...acc, [r.key]: 0 }), {})
    );
    const [comments, setComments] = useState("");
    const [evaluations, setEvaluations] = useState([]); // saved drafts/submissions

    // Derived
    const selectedTeam = useMemo(
        () => teams.find((t) => t.id === selectedTeamId) ?? null,
        [teams, selectedTeamId]
    );

    const totalScore = useMemo(() => {
        // total out of 100 based on weights; each criterion scored 0..10
        const maxPer = 10;
        let sum = 0;
        rubric.forEach((r) => {
            const s = Number(scores[r.key] || 0);
            const normalized = Math.max(0, Math.min(maxPer, s)) / maxPer; // 0..1
            sum += normalized * r.weight;
        });
        return Math.round(sum * 10) / 10; // 1 decimal
    }, [scores, rubric]);

    // --- Handlers ---
    const handleScoreChange = (key, value) => {
        setScores((prev) => ({ ...prev, [key]: value }));
    };

    const resetForm = () => {
        setScores(rubric.reduce((acc, r) => ({ ...acc, [r.key]: 0 }), {}));
        setComments("");
    };

    const ensureSelection = () => {
        if (!selectedTeam || !selectedMember) {
            alert("Please select a team and a member first.");
            return false;
        }
        return true;
    };

    const baseRecord = () => ({
        timestamp: new Date().toISOString(),
        teamId: selectedTeam.id,
        teamName: selectedTeam.name,
        member: selectedMember,
        supervisor: selectedTeam.supervisor,
        project: selectedTeam.project,
        rubric: rubric.map((r) => ({
            key: r.key,
            label: r.label,
            weight: r.weight,
            score10: Number(scores[r.key] || 0),
        })),
        total: totalScore, // out of 100
        comments,
    });

    const saveDraft = () => {
        if (!ensureSelection()) return;
        const rec = { ...baseRecord(), status: "draft" };
        setEvaluations((prev) => [...prev, rec]);
        alert("Draft saved.");
    };

    const submitEvaluation = () => {
        if (!ensureSelection()) return;
        const missing = rubric.filter((r) => scores[r.key] === 0);
        if (missing.length && !confirm("Some criteria are 0. Submit anyway?")) return;

        const rec = { ...baseRecord(), status: "submitted" };
        setEvaluations((prev) => [...prev, rec]);
        alert("Evaluation submitted.");
    };

    const exportJSON = () => {
        if (!evaluations.length) return alert("No evaluations to export.");
        const blob = new Blob([JSON.stringify(evaluations, null, 2)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        download(url, "evaluations.json");
    };

    const exportCSV = () => {
        if (!evaluations.length) return alert("No evaluations to export.");
        // Flatten to CSV
        const headers = [
            "timestamp",
            "status",
            "teamId",
            "teamName",
            "member",
            "supervisor",
            "project",
            ...rubric.map((r) => `${r.key}_score10`),
            "total",
            "comments",
        ];
        const rows = evaluations.map((e) => {
            const per = Object.fromEntries(e.rubric.map((r) => [r.key, r.score10]));
            return [
                e.timestamp,
                e.status,
                e.teamId,
                safe(e.teamName),
                safe(e.member),
                safe(e.supervisor),
                safe(e.project),
                ...rubric.map((r) => per[r.key] ?? ""),
                e.total,
                safe(e.comments).replace(/\n/g, " "),
            ];
        });
        const csv =
            headers.join(",") +
            "\n" +
            rows.map((r) => r.map(csvEscape).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        download(url, "evaluations.csv");
    };

    const download = (url, filename) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };

    const safe = (s) => String(s ?? "");
    const csvEscape = (v) => {
        const s = String(v ?? "");
        if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
        return s;
    };

    // --- UI ---
    return (
        <div className="page">
            {/* Header (same look & feel) */}


            <main className="container content">
                <div className="two-cols">
                    {/* Left: selection & team info */}
                    <section className="card">
                        <div className="card-header">
                            <h2 className="h2">Select Team & Member</h2>
                        </div>
                        <div className="card-body">
                            <div className="stack">
                                <label className="label">Team</label>
                                <select
                                    className="input"
                                    value={selectedTeamId ?? ""}
                                    onChange={(e) => {
                                        const id = Number(e.target.value);
                                        setSelectedTeamId(id);
                                        const team = teams.find((t) => t.id === id);
                                        setSelectedMember(team?.members[0] ?? "");
                                    }}
                                >
                                    {teams.map((t) => (
                                        <option key={t.id} value={t.id}>
                                            {t.name} — {t.project}
                                        </option>
                                    ))}
                                </select>

                                <label className="label">Member</label>
                                <select
                                    className="input"
                                    value={selectedMember}
                                    onChange={(e) => setSelectedMember(e.target.value)}
                                >
                                    {selectedTeam?.members.map((m, i) => (
                                        <option key={i} value={m}>
                                            {m}
                                        </option>
                                    ))}
                                </select>

                                {selectedTeam && (
                                    <div className="panel">
                                        <div className="pair">
                                            <span className="muted">Supervisor:</span>
                                            <span className="bold">{selectedTeam.supervisor}</span>
                                        </div>
                                        <div className="pair">
                                            <span className="muted">Project:</span>
                                            <span className="bold">{selectedTeam.project}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Right: rubric form */}
                    <section className="card">
                        <div className="card-header">
                            <div className="card-header-row">
                                <div>
                                    <h2 className="h2">Evaluation Rubric</h2>
                                    <p className="muted sm">Score each criterion (0–10). Weights are applied automatically.</p>
                                </div>
                                <div className="stack" style={{gap:8}}>
                                    <button className="btn btn-outline" onClick={saveDraft}>
                                        <span className="icon-left" aria-hidden>💾</span>Save Draft
                                    </button>
                                    <button className="btn btn-primary" onClick={submitEvaluation}>
                                        <span className="icon-left" aria-hidden>✅</span>Submit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="stack">
                                {rubric.map((r) => (
                                    <div key={r.key} className="row row-hover">
                                        <div style={{flex:1, marginRight:16}}>
                                            <div className="h3">{r.label}</div>
                                            <div className="muted sm">Weight: {r.weight}% — {r.hint}</div>
                                        </div>
                                        <div className="stack" style={{minWidth:220}}>
                                            <input
                                                className="range"
                                                type="range"
                                                min="0"
                                                max="10"
                                                step="1"
                                                value={scores[r.key]}
                                                onChange={(e) => handleScoreChange(r.key, Number(e.target.value))}
                                            />
                                            <div className="pair">
                                                <span className="muted sm">Score</span>
                                                <input
                                                    className="input input-sm"
                                                    type="number"
                                                    min="0"
                                                    max="10"
                                                    value={scores[r.key]}
                                                    onChange={(e) => {
                                                        const v = Number(e.target.value);
                                                        handleScoreChange(r.key, isNaN(v) ? 0 : Math.max(0, Math.min(10, v)));
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="panel">
                                    <div className="pair">
                                        <span className="h3">Total (weighted)</span>
                                        <span className="h3">{totalScore} / 100</span>
                                    </div>
                                </div>

                                <label className="label">Comments (optional)</label>
                                <textarea
                                    className="textarea"
                                    rows="4"
                                    placeholder="Write constructive feedback…"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                />

                                <div className="pair">
                                    <div className="stack" style={{gap:8}}>
                                        <button className="btn" onClick={resetForm}>
                                            <span className="icon-left" aria-hidden>↺</span>Reset
                                        </button>
                                    </div>
                                    <div className="stack" style={{gap:8}}>
                                        <button className="btn btn-outline" onClick={exportCSV}>
                                            <span className="icon-left" aria-hidden>⬇️</span>Export CSV
                                        </button>
                                        <button className="btn btn-outline" onClick={exportJSON}>
                                            <span className="icon-left" aria-hidden>⬇️</span>Export JSON
                                        </button>
                                    </div>
                                </div>

                                {/* Saved list preview */}
                                <details className="panel">
                                    <summary className="bold">Saved Evaluations ({evaluations.length})</summary>
                                    <div className="stack" style={{marginTop:10}}>
                                        {evaluations.length === 0 && <span className="muted sm">No records yet.</span>}
                                        {evaluations.map((e, i) => (
                                            <div key={i} className="row">
                                                <div>
                                                    <div className="bold">{e.teamName} — {e.member}</div>
                                                    <div className="muted sm">{e.status} • {new Date(e.timestamp).toLocaleString()}</div>
                                                </div>
                                                <div className="bold">{e.total}/100</div>
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
