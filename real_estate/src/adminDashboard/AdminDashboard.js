import React, { useState } from 'react';
import './AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Actions from './Actions';
import {
    faChartLine,
    faBuilding,
    faUsers,
    faEnvelope,
    faCog,
    faSignOutAlt,
    faSearch,
    faBell,
    faArrowUp,
    faEllipsisV,
    faHouseUser,
    faBan,
    faSnowflake,
    faTrashAlt,
    faEye,
    faHistory,
    faChevronRight,
    faChevronDown as faChevronDownSolid,
    faPaperPlane,
    faUsersCog,
    faReply,
    faUserCircle,
    faLock
} from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const [actionLogs, setActionLogs] = useState([]);
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Buyer', status: 'Active', joinDate: '2024-01-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Agent', status: 'Active', joinDate: '2024-01-20' },
        { id: 3, name: 'Mike Ross', email: 'mike@example.com', role: 'Buyer', status: 'Active', joinDate: '2023-11-05' },
        { id: 4, name: 'Harvey Specter', email: 'harvey@example.com', role: 'Agent', status: 'Active', joinDate: '2023-12-10' },
        { id: 5, name: 'Rachel Zane', email: 'rachel@example.com', role: 'Buyer', status: 'Active', joinDate: '2024-02-01' },
    ]);

    const [settings, setSettings] = useState({
        siteName: 'RealEstate Admin',
        supportEmail: 'support@realestate.com',
        maintenanceMode: false,
        emailNotifications: true,
        twoFactorAuth: false,
        currency: 'USD',
    });

    const [settingsFeedback, setSettingsFeedback] = useState(null);
    const [activeSettingCategory, setActiveSettingCategory] = useState('General');

    const [expandedMenus, setExpandedMenus] = useState(['Messages']);
    const [selectedMessageId, setSelectedMessageId] = useState(null);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'John Doe',
            email: 'john@example.com',
            subject: 'Property Query',
            content: 'I am interested in the Ocean View Villa. Is it still available?',
            timestamp: '10:30 AM',
            unread: true,
            thread: [
                { sender: 'John Doe', content: 'I am interested in the Ocean View Villa. Is it still available?', time: '10:30 AM' }
            ]
        },
        {
            id: 2,
            sender: 'Jane Smith',
            email: 'jane@example.com',
            subject: 'Payment Issue',
            content: 'My last transaction seems to be pending for 24 hours now.',
            timestamp: 'Yesterday',
            unread: false,
            thread: [
                { sender: 'Jane Smith', content: 'My last transaction seems to be pending for 24 hours now.', time: 'Yesterday' },
                { sender: 'Admin', content: 'We are looking into this, Jane. Please hold on.', time: 'Yesterday' }
            ]
        }
    ]);

    const navItems = [
        { name: 'Overview', icon: faChartLine },
        { name: 'Properties', icon: faBuilding },
        { name: 'Users', icon: faUsers },
        {
            name: 'Messages',
            icon: faEnvelope,
            subItems: [
                { name: 'Inbox' },
                {
                    name: 'Send',
                    subItems: [
                        { name: 'General' },
                        { name: 'Specific' }
                    ]
                }
            ]
        },
        { name: 'Settings', icon: faCog },
    ];

    const toggleMenu = (name) => {
        setExpandedMenus(prev =>
            prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]
        );
    };

    const handleReply = (messageId, content) => {
        if (!content.trim()) return;

        setMessages(messages.map(msg => {
            if (msg.id === messageId) {
                return {
                    ...msg,
                    unread: false,
                    thread: [...msg.thread, { sender: 'Admin', content, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]
                };
            }
            return msg;
        }));
    };

    const handleAction = (userId, type) => {
        const user = users.find(u => u.id === userId);
        if (!user) return;

        // Confirmation check for Unfreeze and Restore
        if (type === 'Active') {
            const actionLabel = user.status === 'Frozen' ? 'unfreeze' : 'restore';
            const isConfirmed = window.confirm(`Are you sure you want to ${actionLabel} ${user.name}?`);
            if (!isConfirmed) return;
        }

        let newStatus = user.status;
        if (type === 'Suspend') newStatus = 'Suspended';
        if (type === 'Freeze') newStatus = 'Frozen';
        if (type === 'Delete') newStatus = 'Deleted';
        if (type === 'Active') newStatus = 'Active';

        setUsers(users.map(u => u.id === userId ? { ...u, status: newStatus } : u));

        if (type === 'Freeze' || type === 'Delete' || type === 'Suspend') {
            const newLog = {
                type: type === 'Freeze' ? 'User Frozen' : type === 'Delete' ? 'User Deleted' : 'User Suspended',
                userName: user.name,
                timestamp: new Date().toLocaleTimeString(),
            };
            setActionLogs([newLog, ...actionLogs]);
        }
        setOpenDropdownId(null);
    };

    const toggleDropdown = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    const handleSettingsChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const saveSettings = (e) => {
        e.preventDefault();
        setSettingsFeedback('saving');
        setTimeout(() => {
            setSettingsFeedback('success');
            setTimeout(() => setSettingsFeedback(null), 3000);
        }, 1500);
    };

    const stats = [
        { label: 'Total Revenue', value: '$45,280.00', icon: faChartLine, trend: '+12.5%', isUp: true },
        { label: 'Total Properties', value: '1,240', icon: faBuilding, trend: '+5.2%', isUp: true },
        { label: 'Active Users', value: '8,432', icon: faUsers, trend: '+8.1%', isUp: true },
        { label: 'Pending Requests', value: '42', icon: faHouseUser, trend: '-2.4%', isUp: false },
    ];

    const recentProperties = [
        { id: 1, name: 'Ocean View Villa', agent: 'Lagos Island', price: '$1.2M', status: 'Active' },
        { id: 2, name: 'Modern Penthouse', agent: 'Abuja Central', price: '$850K', status: 'Active' },
        { id: 3, name: 'Luxe Apartment', agent: 'Lekki Phase 1', price: '$450K', status: 'Active' },
        { id: 4, name: 'Suburban Home', agent: 'Ikeja Gra', price: '$320K', status: 'Active' },
    ];

    return (
        <div className="admin-dashboard-container">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-logo">
                    <FontAwesomeIcon icon={faHouseUser} />
                    <span>RealEstate Admin</span>
                </div>

                <div className="sidebar-content-scrollable">
                    <nav className="sidebar-nav">
                        {navItems.map((item) => (
                            <li key={item.name} className="nav-item">
                                <div
                                    className={`nav-link-custom ${activeTab === item.name ? 'active' : ''}`}
                                    onClick={() => {
                                        if (item.subItems) {
                                            toggleMenu(item.name);
                                        } else {
                                            setActiveTab(item.name);
                                        }
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span>{item.name}</span>
                                    </div>
                                    {item.subItems && (
                                        <FontAwesomeIcon
                                            icon={expandedMenus.includes(item.name) ? faChevronDownSolid : faChevronRight}
                                            style={{ fontSize: '0.7rem', color: 'white' }}
                                        />
                                    )}
                                </div>

                                {item.subItems && expandedMenus.includes(item.name) && (
                                    <ul className="sidebar-submenu animate-fade-in">
                                        {item.subItems.map(subItem => (
                                            <li key={subItem.name}>
                                                <div
                                                    className={`nav-link-custom submenu-link ${activeTab === subItem.name ? 'active' : ''}`}
                                                    onClick={() => {
                                                        if (subItem.subItems) {
                                                            toggleMenu(subItem.name);
                                                        } else {
                                                            setActiveTab(subItem.name);
                                                        }
                                                    }}
                                                >
                                                    <span>{subItem.name}</span>
                                                    {subItem.subItems && (
                                                        <FontAwesomeIcon
                                                            icon={expandedMenus.includes(subItem.name) ? faChevronDownSolid : faChevronRight}
                                                            style={{ fontSize: '0.6rem', color: 'white' }}
                                                        />
                                                    )}
                                                </div>

                                                {subItem.subItems && expandedMenus.includes(subItem.name) && (
                                                    <ul className="sidebar-submenu-nested animate-fade-in">
                                                        {subItem.subItems.map(nestedItem => (
                                                            <li key={nestedItem.name}>
                                                                <div
                                                                    className={`nav-link-custom submenu-link ${activeTab === `${subItem.name}-${nestedItem.name}` ? 'active' : ''}`}
                                                                    onClick={() => setActiveTab(`${subItem.name}-${nestedItem.name}`)}
                                                                >
                                                                    <span>{nestedItem.name}</span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </nav>

                    {/* Action Logs in Sidebar */}
                    <Actions logs={actionLogs} onToggleView={setActiveTab} activeView={activeTab} />
                </div>

                <div className="sidebar-footer">
                    <div className="nav-link-custom">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>Logout</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-main-content">
                <header className="header-section animate-fade-in">
                    <div className="header-title">
                        <h1>{activeTab} Management</h1>
                        <p style={{ color: 'var(--text-muted)' }}>Manage your {activeTab.toLowerCase()} data efficiently.</p>
                    </div>

                    <div className="header-actions">
                        <div style={{ position: 'relative' }}>
                            <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'white', opacity: 0.6 }} />
                            <input
                                type="text"
                                placeholder="Search..."
                                style={{
                                    background: 'var(--card-bg)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '12px',
                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                    color: 'white',
                                    width: '250px'
                                }}
                            />
                        </div>
                        <button style={{ background: 'var(--card-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '0.75rem 1rem', color: 'white' }}>
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                        <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent-color)' }}>
                            <FontAwesomeIcon icon={faUsers} style={{ color: 'white' }} />
                        </div>
                    </div>
                </header>

                {activeTab === 'Overview' && (
                    <>
                        <section className="stats-grid animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <div className="stat-icon">
                                        <FontAwesomeIcon icon={stat.icon} />
                                    </div>
                                    <div className="stat-trend" style={{ color: stat.isUp ? '#10b981' : '#ef4444' }}>
                                        <FontAwesomeIcon icon={faArrowUp} style={{ transform: stat.isUp ? 'none' : 'rotate(180deg)', marginRight: '5px' }} />
                                        {stat.trend}
                                    </div>
                                    <div className="stat-info">
                                        <div className="stat-value">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </section>

                        <section className="content-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <div className="card-header-flex">
                                <h2>Recent Properties</h2>
                                <FontAwesomeIcon icon={faEllipsisV} style={{ color: 'white', cursor: 'pointer', opacity: 0.7 }} />
                            </div>

                            <div style={{ overflowX: 'auto' }}>
                                <table className="premium-table">
                                    <thead>
                                        <tr>
                                            <th>Property Name</th>
                                            <th>Location</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentProperties.map((prop) => (
                                            <tr key={prop.id}>
                                                <td><div style={{ fontWeight: '600' }}>{prop.name}</div></td>
                                                <td>{prop.agent}</td>
                                                <td>{prop.price}</td>
                                                <td><span className="status-badge status-active">{prop.status}</span></td>
                                                <td>
                                                    <button style={{ background: 'transparent', border: 'none', color: 'white', fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </>
                )}

                {activeTab === 'Users' && (
                    <section className="content-card animate-fade-in">
                        <div className="card-header-flex">
                            <h2>All Users</h2>
                            <button className="btn btn-primary btn-sm" style={{ borderRadius: '10px' }}>+ Add New User</button>
                        </div>

                        <div style={{ overflowX: 'auto' }}>
                            <table className="premium-table">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Role</th>
                                        <th>Join Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td>
                                                <div style={{ fontWeight: '600' }}>{user.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</div>
                                            </td>
                                            <td>{user.role}</td>
                                            <td>{user.joinDate}</td>
                                            <td>
                                                <span className={`status-badge status-${user.status.toLowerCase()}`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="action-dropdown">
                                                    <button
                                                        className="dropdown-toggle-btn"
                                                        style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
                                                        onClick={() => toggleDropdown(user.id)}
                                                    >
                                                        Edit
                                                    </button>

                                                    {openDropdownId === user.id && (
                                                        <div className="custom-dropdown-menu animate-fade-in">
                                                            <div className="dropdown-item-custom" onClick={() => setOpenDropdownId(null)}>
                                                                <FontAwesomeIcon icon={faEye} /> View Activities
                                                            </div>
                                                            <div className="dropdown-item-custom" onClick={() => handleAction(user.id, 'Suspend')}>
                                                                <FontAwesomeIcon icon={faBan} /> Suspend
                                                            </div>
                                                            <div className="dropdown-item-custom" onClick={() => handleAction(user.id, 'Freeze')}>
                                                                <FontAwesomeIcon icon={faSnowflake} /> Freeze
                                                            </div>
                                                            <div className="dropdown-item-custom danger" onClick={() => handleAction(user.id, 'Delete')}>
                                                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {activeTab === 'Frozen' && (
                    <section className="content-card animate-fade-in">
                        <div className="card-header-flex">
                            <h2>Frozen Users</h2>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <span className="status-badge status-frozen">Total Frozen: {users.filter(u => u.status === 'Frozen').length}</span>
                            </div>
                        </div>

                        <div style={{ overflowX: 'auto' }}>
                            <table className="premium-table">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Role</th>
                                        <th>Join Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.filter(user => user.status === 'Frozen').length === 0 ? (
                                        <tr>
                                            <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                                No users are currently frozen.
                                            </td>
                                        </tr>
                                    ) : (
                                        users.filter(user => user.status === 'Frozen').map((user) => (
                                            <tr key={user.id}>
                                                <td>
                                                    <div style={{ fontWeight: '600' }}>{user.name}</div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</div>
                                                </td>
                                                <td>{user.role}</td>
                                                <td>{user.joinDate}</td>
                                                <td>
                                                    <span className="status-badge status-frozen">Frozen</span>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm"
                                                        style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', borderRadius: '8px' }}
                                                        onClick={() => handleAction(user.id, 'Active')}
                                                    >
                                                        Unfreeze
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {activeTab === 'Suspended' && (
                    <section className="content-card animate-fade-in">
                        <div className="card-header-flex">
                            <h2>Suspended Users</h2>
                            <span className="status-badge status-suspended">Total Suspended: {users.filter(u => u.status === 'Suspended').length}</span>
                        </div>
                        <div style={{ overflowX: 'auto' }}>
                            <table className="premium-table">
                                <thead>
                                    <tr><th>User</th><th>Role</th><th>Join Date</th><th>Status</th><th>Actions</th></tr>
                                </thead>
                                <tbody>
                                    {users.filter(user => user.status === 'Suspended').length === 0 ? (
                                        <tr><td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>No suspended users.</td></tr>
                                    ) : (
                                        users.filter(user => user.status === 'Suspended').map((user) => (
                                            <tr key={user.id}>
                                                <td>
                                                    <div style={{ fontWeight: '600' }}>{user.name}</div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</div>
                                                </td>
                                                <td>{user.role}</td><td>{user.joinDate}</td>
                                                <td><span className="status-badge status-suspended">Suspended</span></td>
                                                <td><button className="btn btn-sm" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', borderRadius: '8px' }} onClick={() => handleAction(user.id, 'Active')}>Restore</button></td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {activeTab === 'Deleted' && (
                    <section className="content-card animate-fade-in">
                        <div className="card-header-flex">
                            <h2>Deleted Users</h2>
                            <span className="status-badge status-deleted">Total Deleted: {users.filter(u => u.status === 'Deleted').length}</span>
                        </div>
                        <div style={{ overflowX: 'auto' }}>
                            <table className="premium-table">
                                <thead>
                                    <tr><th>User</th><th>Role</th><th>Join Date</th><th>Status</th><th>Actions</th></tr>
                                </thead>
                                <tbody>
                                    {users.filter(user => user.status === 'Deleted').length === 0 ? (
                                        <tr><td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>No deleted users.</td></tr>
                                    ) : (
                                        users.filter(user => user.status === 'Deleted').map((user) => (
                                            <tr key={user.id}>
                                                <td>
                                                    <div style={{ fontWeight: '600' }}>{user.name}</div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</div>
                                                </td>
                                                <td>{user.role}</td><td>{user.joinDate}</td>
                                                <td><span className="status-badge status-deleted">Deleted</span></td>
                                                <td><button className="btn btn-sm" style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', borderRadius: '8px' }} onClick={() => handleAction(user.id, 'Active')}>Restore</button></td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {activeTab === 'Logs' && (
                    <section className="content-card animate-fade-in">
                        <div className="card-header-flex">
                            <h2>Activity History Logs</h2>
                            <button
                                className="btn btn-sm"
                                style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px' }}
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to clear all activity logs? This action cannot be undone.')) {
                                        setActionLogs([]);
                                    }
                                }}
                            >
                                Clear Logs
                            </button>
                        </div>
                        <div style={{ overflowY: 'auto', maxHeight: '500px' }}>
                            {actionLogs.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                                    <FontAwesomeIcon icon={faHistory} style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.2 }} />
                                    <p>No activities recorded yet.</p>
                                </div>
                            ) : (
                                <div className="logs-timeline" style={{ padding: '1rem' }}>
                                    {actionLogs.map((log, index) => (
                                        <div key={index} className="action-log-item" style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', borderLeft: '3px solid var(--accent-color)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div>
                                                    <h4 style={{ margin: 0, fontSize: '1rem', color: 'white' }}>{log.type}</h4>
                                                    <p style={{ margin: '5px 0 0', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>User: <span style={{ color: 'white' }}>{log.userName}</span></p>
                                                </div>
                                                <span style={{ fontSize: '0.8rem', color: 'white', opacity: 0.8 }}>{log.timestamp}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {activeTab === 'Inbox' && (
                    <section className="animate-fade-in">
                        <div className="inbox-container">
                            {/* Inbox List */}
                            <div className="inbox-list">
                                <div className="inbox-list-header">
                                    Messages ({messages.filter(m => m.unread).length} Unread)
                                </div>
                                <div className="message-items-wrapper">
                                    {messages.map(msg => (
                                        <div
                                            key={msg.id}
                                            className={`message-item ${selectedMessageId === msg.id ? 'active' : ''} ${msg.unread ? 'unread' : ''}`}
                                            onClick={() => {
                                                setSelectedMessageId(msg.id);
                                                setMessages(messages.map(m => m.id === msg.id ? { ...m, unread: false } : m));
                                            }}
                                        >
                                            <div className="message-info-top">
                                                <span style={{ fontWeight: '600', color: 'white' }}>{msg.sender}</span>
                                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{msg.timestamp}</span>
                                            </div>
                                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {msg.subject}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Message Detail View */}
                            <div className="message-thread-view">
                                {selectedMessageId ? (() => {
                                    const activeMsg = messages.find(m => m.id === selectedMessageId);
                                    return (
                                        <>
                                            <div className="chat-header">
                                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent-color)' }}>
                                                    <FontAwesomeIcon icon={faUserCircle} style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }} />
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: '600', color: 'white' }}>{activeMsg.sender}</div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{activeMsg.email}</div>
                                                </div>
                                            </div>

                                            <div className="chat-messages">
                                                {activeMsg.thread.map((t, idx) => (
                                                    <div key={idx} className={`chat-bubble ${t.sender.toLowerCase()}`}>
                                                        {t.content}
                                                        <span className="bubble-meta">{t.time}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="chat-footer">
                                                <form
                                                    className="reply-input-wrapper"
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        const input = e.target.elements.reply;
                                                        handleReply(activeMsg.id, input.value);
                                                        input.value = '';
                                                    }}
                                                >
                                                    <input name="reply" type="text" placeholder="Type your response..." autoComplete="off" />
                                                    <button type="submit" className="send-reply-btn">
                                                        <FontAwesomeIcon icon={faReply} />
                                                    </button>
                                                </form>
                                            </div>
                                        </>
                                    );
                                })() : (
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.1 }} />
                                        <p>Select a message to view the conversation</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'Send-General' && (
                    <section className="content-card animate-fade-in premium-form-container">
                        <div className="card-header-flex">
                            <div className="title-with-icon">
                                <FontAwesomeIcon icon={faUsersCog} className="accent-icon" />
                                <h2>Send General Message</h2>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <p className="form-description">Broadcast a message to your entire community or specific groups.</p>
                            <div className="premium-input-group">
                                <label><FontAwesomeIcon icon={faUsers} /> Target Audience</label>
                                <select className="premium-select">
                                    <option>All Users</option>
                                    <option>All Agents</option>
                                    <option>All Buyers</option>
                                </select>
                            </div>
                            <div className="premium-input-group">
                                <label><FontAwesomeIcon icon={faEnvelope} /> Message Content</label>
                                <textarea className="premium-textarea" rows="6" placeholder="Type your announcement here..."></textarea>
                            </div>
                            <button className="premium-submit-btn">
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <span>Send Broadcast</span>
                            </button>
                        </div>
                    </section>
                )}

                {activeTab === 'Send-Specific' && (
                    <section className="content-card animate-fade-in premium-form-container">
                        <div className="card-header-flex">
                            <div className="title-with-icon">
                                <FontAwesomeIcon icon={faPaperPlane} className="accent-icon" />
                                <h2>Send Specific Message</h2>
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <p className="form-description">Directly communicate with an individual user.</p>
                            <div className="premium-input-group">
                                <label><FontAwesomeIcon icon={faSearch} /> Find Recipient</label>
                                <div className="input-with-icon">
                                    <FontAwesomeIcon icon={faUsers} className="input-inner-icon" />
                                    <input type="text" className="premium-input" placeholder="Enter username or email..." />
                                </div>
                            </div>
                            <div className="premium-input-group">
                                <label><FontAwesomeIcon icon={faEnvelope} /> Message</label>
                                <textarea className="premium-textarea" rows="6" placeholder="Type your private message..."></textarea>
                            </div>
                            <button className="premium-submit-btn">
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <span>Send Private Message</span>
                            </button>
                        </div>
                    </section>
                )}

                {activeTab === 'Settings' && (
                    <section className="animate-fade-in settings-v2-wrapper">
                        <div className="settings-v2-sidebar">
                            <div className="settings-v2-nav">
                                <button
                                    className={`settings-nav-item ${activeSettingCategory === 'General' ? 'active' : ''}`}
                                    onClick={() => setActiveSettingCategory('General')}
                                >
                                    <FontAwesomeIcon icon={faCog} />
                                    <span>General</span>
                                </button>
                                <button
                                    className={`settings-nav-item ${activeSettingCategory === 'Security' ? 'active' : ''}`}
                                    onClick={() => setActiveSettingCategory('Security')}
                                >
                                    <FontAwesomeIcon icon={faLock} />
                                    <span>Security</span>
                                </button>
                                <button
                                    className={`settings-nav-item ${activeSettingCategory === 'Notifications' ? 'active' : ''}`}
                                    onClick={() => setActiveSettingCategory('Notifications')}
                                >
                                    <FontAwesomeIcon icon={faBell} />
                                    <span>Notifications</span>
                                </button>
                            </div>
                        </div>

                        <div className="settings-v2-content">
                            <div className="card-header-flex" style={{ marginBottom: '2rem' }}>
                                <div>
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{activeSettingCategory} Settings</h2>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Manage your platform's {activeSettingCategory.toLowerCase()} configurations.</p>
                                </div>
                                {settingsFeedback && (
                                    <div className={`form-feedback ${settingsFeedback === 'saving' ? 'sending' : 'success'}`}>
                                        {settingsFeedback === 'saving' ? 'Saving...' : 'Updated!'}
                                    </div>
                                )}
                            </div>

                            <form onSubmit={saveSettings}>
                                {activeSettingCategory === 'General' && (
                                    <div className="animate-fade-in">
                                        <div className="premium-input-group">
                                            <label>Platform Name</label>
                                            <input
                                                type="text"
                                                name="siteName"
                                                className="premium-input"
                                                value={settings.siteName}
                                                onChange={handleSettingsChange}
                                            />
                                        </div>
                                        <div className="premium-input-group">
                                            <label>Support Email</label>
                                            <input
                                                type="email"
                                                name="supportEmail"
                                                className="premium-input"
                                                value={settings.supportEmail}
                                                onChange={handleSettingsChange}
                                            />
                                        </div>
                                        <div className="premium-input-group">
                                            <label>Platform Currency</label>
                                            <select
                                                name="currency"
                                                className="premium-select"
                                                value={settings.currency}
                                                onChange={handleSettingsChange}
                                            >
                                                <option value="USD">USD ($)</option>
                                                <option value="EUR">EUR (€)</option>
                                                <option value="GBP">GBP (£)</option>
                                                <option value="NGN">NGN (₦)</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {activeSettingCategory === 'Security' && (
                                    <div className="animate-fade-in">
                                        <div className="premium-input-group" style={{ marginTop: '2rem' }}>
                                            <label>Current Password</label>
                                            <input type="password" className="premium-input" placeholder="••••••••" />
                                        </div>
                                        <div className="premium-input-group">
                                            <label>New Password</label>
                                            <input type="password" className="premium-input" placeholder="Leave blank to keep current" />
                                        </div>
                                    </div>
                                )}

                                {activeSettingCategory === 'Notifications' && (
                                    <div className="animate-fade-in">
                                        <p style={{ color: 'var(--text-muted)', padding: '1rem' }}>No active notifications to configure.</p>
                                    </div>
                                )}

                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                                    <button type="submit" className="premium-submit-btn" style={{ width: 'auto', padding: '0.8rem 2.5rem' }}>
                                        Save {activeSettingCategory} Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section >
                )}

                {
                    activeTab !== 'Overview' && activeTab !== 'Users' && activeTab !== 'Frozen' && activeTab !== 'Suspended' && activeTab !== 'Deleted' && activeTab !== 'Logs' && activeTab !== 'Inbox' && activeTab !== 'Send-General' && activeTab !== 'Send-Specific' && activeTab !== 'Settings' && (
                        <div className="content-card animate-fade-in" style={{ textAlign: 'center', padding: '5rem' }}>
                            <FontAwesomeIcon icon={faCog} spin style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }} />
                            <h3>{activeTab} Section Under Construction</h3>
                            <p style={{ color: 'var(--text-muted)' }}>We're working hard to bring you this feature soon!</p>
                        </div>
                    )
                }
            </main >
        </div >
    );
};

export default AdminDashboard;
