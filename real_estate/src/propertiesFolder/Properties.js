import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import propertiesLevels from "./newPropImages/13-Most-Expensive-Houses-In-Lagos.jpeg";
import redHouse from "./newPropImages/redHouse.jpg";
import house1 from "./newPropImages/house1.jpg";
import usingImage from "./newPropImages/redSearch.jpeg";

import "./newProperties.css";

// Shared Components
import PropertyCard from "./components/PropertyCard";
import PropertyModal from "./components/PropertyModal";

const propertiesData = [
  {
    id: 1,
    image: usingImage,
    title: "4 Bedroom Detached Duplex",
    price: "₦7,563,345,000",
    beds: 7,
    baths: 5,
    size: "500sqm",
    location: "Lagos, Nigeria",
    posted: "2 weeks ago",
    status: "For Sale",
    availability: "Available",
    description: "Experience luxury living in this architectural masterpiece. Featuring spacious ensuite bedrooms, a fully fitted kitchen, and a private cinema. The exterior boasts ample parking space and lush greenery.",
  },
  {
    id: 2,
    image: redHouse,
    title: "Luxury Villa with Pool",
    price: "₦7,563,345,000",
    beds: 7,
    baths: 5,
    size: "500sqm",
    location: "Lagos, Nigeria",
    posted: "2 weeks ago",
    status: "For Sale",
    availability: "Available",
    description: "A stunning villa designed for comfort and style. Enjoy the sparkling swimming pool, modern interiors, and high-end finishes throughout the property. Perfect for a modern family.",
  },
  {
    id: 3,
    image: house1,
    title: "Modern Family Home",
    price: "₦7,563,345,000",
    beds: 7,
    baths: 5,
    size: "500sqm",
    location: "Lagos, Nigeria",
    posted: "2 weeks ago",
    status: "For Sale",
    availability: "Available",
    description: "Located in a serene environment, this home offers security, 24/7 power supply, and close proximity to major landmarks. It features a boys' quarters and a spacious living area.",
  },
  {
    id: 3,
    image: house1,
    title: "Modern Family Empire",
    price: "₦17,552,005,000",
    beds: 12,
    baths: 11,
    size: "2000sqm",
    location: "Lagos, Nigeria",
    posted: "3 weeks ago",
    status: "For lease",
    availability: "Available",
    description: "Located in a serene environment, this home offers security, 24/7 power supply, and close proximity to major landmarks. It features a boys' quarters and a spacious living area.",
  },
];

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="new-properties-page">
      <header className="page-header" style={{ backgroundImage: `url(${propertiesLevels})` }}>
        <div className="header-overlay pt-lg-5 pt-xl-0">
          <h1 className="">Available Properties</h1>
          <p>Explore our wide range of premium real estate options</p>
        </div>
      </header>

      <div className="content-container">
        <div className="back-nav">
          <NavLink to="/" className="back-btn">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
          </NavLink>
        </div>

        <main className="properties-grid">
          {propertiesData.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onView={setSelectedProperty}
            />
          ))}
        </main>
      </div>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};

export default Properties;
