import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartPie,
    faUsers,
    faWallet,
    faArrowUp,
    faArrowDown,
    faClock,
    faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

const AgentAnalysis = () => {
    // Mock analytics data
    const insights = [
        { label: "Total Revenue", value: "₦425.5M", change: "+12.5%", isUp: true, icon: faWallet, color: "primary" },
        { label: "Active Leads", value: "842", change: "+5.2%", isUp: true, icon: faUsers, color: "info" },
        { label: "Conversion Rate", value: "3.2%", change: "-0.4%", isUp: false, icon: faChartPie, color: "success" },
        { label: "Avg. Time to Close", value: "18 Days", change: "-2 Days", isUp: true, icon: faClock, color: "warning" }
    ];

    const performanceData = [
        { month: "Jan", leads: 45, sales: 12 },
        { month: "Feb", leads: 52, sales: 15 },
        { month: "Mar", leads: 48, sales: 14 },
        { month: "Apr", leads: 61, sales: 18 },
        { month: "May", leads: 55, sales: 16 },
        { month: "Jun", leads: 67, sales: 21 }
    ];

    const topLocations = [
        { name: "Lekki Phase 1", deals: 12, value: "1.2B" },
        { name: "Ikeja GRA", deals: 8, value: "850M" },
        { name: "Victoria Island", deals: 7, value: "2.1B" },
        { name: "Ikoyi", deals: 5, value: "3.4B" }
    ];

    return (
        <div className="agent-analysis">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0">Performance Analysis</h2>
                <div className="d-flex gap-2">
                    <select className="form-select form-select-sm border-0 bg-white shadow-sm" style={{ width: '120px' }}>
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                    </select>
                    <button className="btn btn-primary btn-sm px-3 rounded-3">Export Report</button>
                </div>
            </div>

            {/* Insight Cards */}
            <div className="row g-4 mb-4">
                {insights.map((item, index) => (
                    <div className="col-lg-3 col-sm-6" key={index}>
                        <div className="stats-card h-100">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div className={`icon-circle bg-${item.color}-subtle text-${item.color}`}>
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                                <div className={`trend-text ${item.isUp ? 'text-success' : 'text-danger'}`}>
                                    <FontAwesomeIcon icon={item.isUp ? faArrowUp : faArrowDown} className="me-1" />
                                    {item.change}
                                </div>
                            </div>
                            <h3 className="stat-value fw-bold mb-1">{item.value}</h3>
                            <p className="text-muted small mb-0">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row g-4">
                {/* Growth Chart Placeholder */}
                <div className="col-lg-8">
                    <div className="properties-table-container h-100">
                        <h5 className="fw-bold mb-4">Lead vs Sales Growth</h5>
                        <div className="d-flex align-items-end gap-3 h-100 pb-4" style={{ minHeight: '300px' }}>
                            {performanceData.map((data, idx) => (
                                <div key={idx} className="flex-grow-1 d-flex flex-column align-items-center gap-2">
                                    <div className="d-flex align-items-end gap-1 w-100" style={{ height: '200px' }}>
                                        <div
                                            className="bg-primary opacity-25 rounded-top w-50"
                                            style={{ height: `${(data.leads / 80) * 100}%` }}
                                            title={`Leads: ${data.leads}`}
                                        ></div>
                                        <div
                                            className="bg-primary rounded-top w-50"
                                            style={{ height: `${(data.sales / 80) * 100}%` }}
                                            title={`Sales: ${data.sales}`}
                                        ></div>
                                    </div>
                                    <span className="small text-muted fw-semibold">{data.month}</span>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex gap-4 mt-3 pt-3 border-top">
                            <div className="d-flex align-items-center gap-2">
                                <span className="bg-primary opacity-25 rounded-circle" style={{ width: '12px', height: '12px' }}></span>
                                <span className="small text-muted">Total Leads</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <span className="bg-primary rounded-circle" style={{ width: '12px', height: '12px' }}></span>
                                <span className="small text-muted">Successful Sales</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Locations Breakdown */}
                <div className="col-lg-4">
                    <div className="properties-table-container h-100">
                        <h5 className="fw-bold mb-4">High Yield Locations</h5>
                        <div className="location-list">
                            {topLocations.map((loc, idx) => (
                                <div key={idx} className="location-item d-flex align-items-center gap-3 mb-4 last-child-mb-0">
                                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary opacity-75" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span className="fw-semibold small">{loc.name}</span>
                                            <span className="fw-bold small">₦{loc.value}</span>
                                        </div>
                                        <div className="progress" style={{ height: '6px' }}>
                                            <div
                                                className="progress-bar bg-primary rounded-pill"
                                                style={{ width: `${(loc.deals / 15) * 100}%` }}
                                            ></div>
                                        </div>
                                        <small className="text-muted mt-1 d-block" style={{ fontSize: '0.7rem' }}>{loc.deals} successful deals</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentAnalysis;
