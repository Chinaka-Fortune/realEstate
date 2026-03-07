import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faBath,
    faLocationDot,
    faPhone,
    faRulerCombined,
    faXmark,
    faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../newProperties.css"; // Ensure styles are available

const PropertyModal = ({ property, onClose }) => {
    if (!property) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className="modal-body-grid">
                    <div className="modal-image-col">
                        <img src={property.image} alt={property.title} className="modal-main-image" />
                        <div className="modal-badges">
                            <span className="badge badge-status">{property.status}</span>
                            <span className="badge badge-avail">{property.availability}</span>
                        </div>
                    </div>

                    <div className="modal-details-col">
                        <div className="modal-header-content">
                            <h2 className="modal-title">{property.title}</h2>
                            <div className="modal-location">
                                <FontAwesomeIcon icon={faLocationDot} className="icon" /> {property.location}
                            </div>
                        </div>

                        <h3 className="modal-price">{property.price}</h3>

                        <div className="modal-specs">
                            <div className="modal-spec-item">
                                <div className="spec-icon-wrapper">
                                    <FontAwesomeIcon icon={faBed} />
                                </div>
                                <span>{property.beds} Bedrooms</span>
                            </div>
                            <div className="modal-spec-item">
                                <div className="spec-icon-wrapper">
                                    <FontAwesomeIcon icon={faBath} />
                                </div>
                                <span>{property.baths} Bathrooms</span>
                            </div>
                            <div className="modal-spec-item">
                                <div className="spec-icon-wrapper">
                                    <FontAwesomeIcon icon={faRulerCombined} />
                                </div>
                                <span>{property.size}</span>
                            </div>
                        </div>

                        <div className="modal-description-wrapper">
                            <h4 className="description-label">Description</h4>
                            <p className="modal-description">{property.description || "Detailed description not available for this property."}</p>
                        </div>

                        <div className="modal-actions">
                            <button className="modal-action-btn cta-primary">
                                <FontAwesomeIcon icon={faCalendarCheck} /> Schedule Viewing
                            </button>
                            <button className="modal-action-btn secondary">
                                <FontAwesomeIcon icon={faPhone} /> Call
                            </button>
                            <button className="modal-action-btn whatsapp">
                                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyModal;
