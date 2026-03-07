import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faChevronDown, faChevronUp, faSnowflake, faListUl, faBan, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Actions = ({ logs, onToggleView, activeView }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const menuItems = [
        { id: 'Logs', label: 'Logs', icon: faListUl },
        { id: 'Frozen', label: 'Freezed', icon: faSnowflake },
        { id: 'Suspended', label: 'Suspended', icon: faBan },
        { id: 'Deleted', label: 'Deleted', icon: faTrashAlt },
    ];

    return (
        <div className="sidebar-actions-container">
            <div className="sidebar-actions-header" onClick={() => setIsOpen(!isOpen)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FontAwesomeIcon icon={faHistory} />
                    <span>Action Logs</span>
                </div>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} style={{ fontSize: '0.8rem' }} />
            </div>

            {isOpen && (
                <div className="actions-list animate-fade-in" style={{ padding: '0.5rem 0.5rem 1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                className={`action-toggle-btn ${activeView === item.id ? 'active' : ''}`}
                                onClick={() => onToggleView(item.id)}
                                style={{ fontSize: '0.7rem' }}
                            >
                                <FontAwesomeIcon icon={item.icon} /> {item.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ marginTop: '1rem', padding: '0.5rem', fontSize: '0.65rem', color: 'white', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
                        Viewing: <span style={{ color: 'white', fontWeight: '700' }}>{activeView}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Actions;
