import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUpload,
    faHouse,
    faChartLine,
    faBell,
    faSearch,
    faSignOutAlt,
    faBars,
    faTimes,
    faChartPie
} from "@fortawesome/free-solid-svg-icons";
import "./AgentDashBoard.css";

// Sub-components
import AgentHome from "./AgentHome";
import UploadProperty from "./UploadProperty";
import MyProperties from "./MyProperties";
import AgentAnalysis from "./AgentAnalysis";

const AgentDashBoard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebarOnMobile = () => {
        if (window.innerWidth <= 768) {
            setIsSidebarOpen(false);
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        closeSidebarOnMobile();
    };

    const renderContent = () => {
        switch (activeTab) {
            case "overview":
                return <AgentHome />;
            case "upload":
                return <UploadProperty />;
            case "properties":
                return <MyProperties />;
            case "analysis":
                return <AgentAnalysis />;
            default:
                return <AgentHome />;
        }
    };

    return (
        <div className={`agent-dashboard ${isSidebarOpen ? "sidebar-open" : ""}`}>
            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div className="sidebar-overlay" onClick={toggleSidebar}></div>
            )}

            <div className={`agent-sidebar ${isSidebarOpen ? "show" : ""}`}>
                <div className="sidebar-header d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="brand-logo">RealEstate</h2>
                        <p className="agent-badge">Agent Panel</p>
                    </div>
                    <button className="btn btn-link text-white d-md-none p-0" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        <li>
                            <button
                                className={activeTab === "overview" ? "active" : ""}
                                onClick={() => handleTabChange("overview")}
                            >
                                <FontAwesomeIcon icon={faChartLine} className="nav-icon" />
                                <span>Overview</span>
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeTab === "upload" ? "active" : ""}
                                onClick={() => handleTabChange("upload")}
                            >
                                <FontAwesomeIcon icon={faUpload} className="nav-icon" />
                                <span>Upload Property</span>
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeTab === "properties" ? "active" : ""}
                                onClick={() => handleTabChange("properties")}
                            >
                                <FontAwesomeIcon icon={faHouse} className="nav-icon" />
                                <span>My Properties</span>
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeTab === "analysis" ? "active" : ""}
                                onClick={() => handleTabChange("analysis")}
                            >
                                <FontAwesomeIcon icon={faChartPie} className="nav-icon" />
                                <span>Analysis</span>
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn">
                        <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            <div className="agent-main-content">
                <header className="dashboard-header">
                    <div className="header-left">
                        <button className="sidebar-toggle btn btn-light d-md-none me-3" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <div className="search-box">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>
                    <div className="header-actions">
                        <div className="notification-bell d-none d-sm-block">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="badge">3</span>
                        </div>
                        <div className="agent-profile">
                            <img src="https://ui-avatars.com/api/?name=Agent+User&background=6366f1&color=fff" alt="Profile" />
                            <div className="profile-info d-none d-md-block">
                                <p className="profile-name">Chinaka Fortune</p>
                                <p className="profile-status">Verified Agent</p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="content-area">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AgentDashBoard;
