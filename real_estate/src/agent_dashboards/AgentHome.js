import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEye, faHandshake, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const AgentHome = () => {
    const stats = [
        { label: "Total Properties", value: "12", icon: faHouse, color: "#6366f1" },
        { label: "Total Views", value: "1,248", icon: faEye, color: "#10b981" },
        { label: "Pending Deals", value: "5", icon: faHandshake, color: "#f59e0b" },
        { label: "Growth", value: "+12.5%", icon: faArrowTrendUp, color: "#ec4899" },
    ];

    return (
        <div className="agent-home">
            <h2 className="mb-4 fw-bold">Dashboard Overview</h2>

            <div className="row g-4 mb-5">
                {stats.map((stat, index) => (
                    <div key={index} className="col-md-3">
                        <div className="stats-card h-100 d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div
                                    className="icon-circle"
                                    style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                                >
                                    <FontAwesomeIcon icon={stat.icon} />
                                </div>
                                <span className="trend-text" style={{ color: stat.color }}>{stat.label}</span>
                            </div>
                            <h3 className="stat-value fw-bold m-0">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="stats-card">
                        <h5 className="fw-bold mb-4">Recent Activity</h5>
                        <div className="activity-list">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="activity-item d-flex gap-3 mb-4 last-mb-0">
                                    <div className="activity-avatar">
                                        <img src={`https://i.pravatar.cc/40?u=${i}`} alt="" className="rounded-circle" />
                                    </div>
                                    <div className="activity-info">
                                        <p className="mb-0"><strong>John Doe</strong> inquired about <strong>Luxury Villa in Lekki</strong></p>
                                        <small className="text-muted">2 hours ago</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="stats-card h-100">
                        <h5 className="fw-bold mb-4">Property Performance</h5>
                        <div className="performance-chart-placeholder text-center p-5 text-muted">
                            <FontAwesomeIcon icon={faArrowTrendUp} size="3x" className="mb-3 opacity-25" />
                            <p>Visualization placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentHome;
