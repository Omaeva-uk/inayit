import React from "react";
import PropTypes from "prop-types";

export default function ServiceCard({ title, description, IconComponent }) {
  return (
    <div className="service-card">
      <div className="service-card-icon">
        <IconComponent />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
};
