import React from "react";
import "./landing.css";
import { HashLink as Link } from "react-router-hash-link";

export default function LandingSection() {
  return (
    <section className="landing-section">
      <div className="container">
        {/* Content Section */}
        <div className="content">
          <h1>
            Efficient <span>Solutions</span> for your Business
          </h1>
          <p>
            InayIT delivers tailored digital infrastructure solutions that
            optimize your IT resources, reduce costs, and drive business growth.
            Our scalable solutions grow with your business, ensuring optimal
            performance and long-term success.
          </p>
          <Link to="/#contact-us" ><button className="contact-button">Contact us</button> </Link>
        </div>

        {/* Image Section */}
        <div className="image">
          <img src="/Group 2.png" alt="IT Infrastructure" />
        </div>
      </div>
    </section>
  );
}
