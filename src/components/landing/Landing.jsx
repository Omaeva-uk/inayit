import React from "react";
import "./landing.css";

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
          <button className="contact-button">Contact us</button>
        </div>

        {/* Image Section */}
        <div className="image">
          <img src="/Group 2.png" alt="IT Infrastructure" />
        </div>
      </div>
    </section>
  );
}
