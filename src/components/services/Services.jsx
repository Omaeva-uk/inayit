import React from "react";
import { Link } from "react-router-dom";

import "./services.css";
import {services} from "../../data";



export default function ServicesSection() {
  

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="card-container">
        {services.map(({ title, description, Icon, id }, index) => (
          <Link to={`/service-page/${id}`} key={index}>
            <div className="service-card">
            {/* Rolling Blob */}
            <div className="card-blob"></div>
            <div className="icon">
              <Icon style={{ fontSize: "3rem", color: "#0978fe" }} />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <a href="#" className="read-more">
              Read More <span>➔</span>
            </a>
          </div>
          </Link>
          
        ))}
      </div>
    </section>
  );
}
