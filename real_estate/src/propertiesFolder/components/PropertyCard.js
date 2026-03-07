import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faBath,
    faClock,
    faLocationDot,
    faPhone,
    faHeart as faHeartSolid,
    faRulerCombined
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import "../newProperties.css";

const PropertyCard = ({ property, onView }) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <article className="property-card mx-auto" onClick={() => onView(property)}>
            <div className="card-image-wrapper ">
                <img src={property.image} alt={property.title} />
                <div className="card-overlay">
                    <button className="view-btn">
                        Quick View
                    </button>
                </div>
                <div className="card-badges">
                    <span className="badge badge-status">{property.status}</span>
                    <span className="badge badge-avail">{property.availability}</span>
                </div>
            </div>

            <div className="card-content">
                <div className="card-header">
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-price">{property.price}</p>
                </div>

                <div className="property-specs">
                    <div className="spec-item">
                        <FontAwesomeIcon icon={faBed} className="spec-icon" />
                        <span>{property.beds} Beds</span>
                    </div>
                    <div className="spec-item">
                        <FontAwesomeIcon icon={faBath} className="spec-icon" />
                        <span>{property.baths} Baths</span>
                    </div>
                    <div className="spec-item">
                        <FontAwesomeIcon icon={faRulerCombined} className="spec-icon" />
                        <span>{property.size}</span>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="location-info">
                        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                        <span>{property.location}</span>
                    </div>

                    <div className="card-actions">
                        <button
                            className="action-btn"
                            title="Call"
                            onClick={(e) => { e.stopPropagation(); }}
                        >
                            <FontAwesomeIcon icon={faPhone} />
                        </button>
                        <button
                            className="action-btn"
                            title="Whatsapp"
                            onClick={(e) => { e.stopPropagation(); }}
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </button>
                        <button
                            className={`action-btn like-btn ${isLiked ? 'active' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsLiked(!isLiked);
                            }}
                        >
                            <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} />
                        </button>
                    </div>
                </div>

                <div className="posted-date">
                    <FontAwesomeIcon icon={faClock} /> Posted {property.posted}
                </div>
            </div>
        </article>
    );
};

export default PropertyCard;
