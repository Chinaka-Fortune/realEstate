import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

const MyProperties = () => {
    const properties = [
        {
            id: 1,
            title: "Modern Duplex in Lekki Phase 1",
            price: "150,000,000",
            status: "Published",
            category: "Sale",
            views: 452,
            date: "2023-10-15"
        },
        {
            id: 2,
            title: "Luxury Apartment with Ocean View",
            price: "2,500,000",
            status: "Pending",
            category: "Rent",
            views: 128,
            date: "2023-11-02"
        },
        {
            id: 3,
            title: "Commercial Space in Ikeja",
            price: "450,000,000",
            status: "Published",
            category: "Sale",
            views: 89,
            date: "2023-11-20"
        }
    ];

    return (
        <div className="my-properties">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0">My Uploaded Properties</h2>
                <div className="badge bg-primary-subtle text-primary p-2 px-3 rounded-pill fw-semibold">
                    {properties.length} Total Listings
                </div>
            </div>

            <div className="properties-table-container">
                <div className="table-responsive">
                    <table className="table table-hover align-middle custom-table">
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Status</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Views</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map(prop => (
                                <tr key={prop.id}>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="prop-thumb bg-light rounded-3 overflow-hidden d-none d-sm-block" style={{ width: '60px', height: '40px', flexShrink: 0 }}>
                                                <img src={`https://picsum.photos/seed/${prop.id}/60/40`} alt="" />
                                            </div>
                                            <div className="prop-info flex-grow-1 min-width-0">
                                                <div className="fw-semibold text-truncate" title={prop.title}>{prop.title}</div>
                                                <small className="text-muted">Added on {prop.date}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-dot ${prop.status.toLowerCase()}`}></span>
                                        {prop.status}
                                    </td>
                                    <td>
                                        <span className={`badge ${prop.category === 'Sale' ? 'bg-success-subtle text-success' : 'bg-info-subtle text-info'} rounded-pill`}>
                                            {prop.category}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`status-dot ${prop.status.toLowerCase()}`}></span>
                                        {prop.status}
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center gap-1">
                                            <FontAwesomeIcon icon={faEye} className="text-muted small" />
                                            {prop.views}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-sm btn-outline-primary border-0 rounded-3">
                                                <FontAwesomeIcon icon={faPencilAlt} />
                                            </button>
                                            <button className="btn btn-sm btn-outline-danger border-0 rounded-3">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProperties;
