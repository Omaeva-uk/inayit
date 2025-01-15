/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./about.css";
import { HashLink as Link } from "react-router-hash-link";

export default function AboutUs() {
  return (
    <section id="about" className="about-us-section">
      <div className="about-us-container">
        {/* Image Section */}
        <div className="about-us-video">
          <video
            playsInline
            autoPlay
            loop
            muted
            preload="auto"
            className="about-us-video-element"
            style={{ borderRadius: "25px", height: "400px", width: "100%" }}
          >
            <source
              src="https://inayit.s3.eu-north-1.amazonaws.com/15.mp4"
              type="video/mp4"
            />
            <source src="/abt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section */}
        <div className="about-us-content">
          <h2>About us</h2>
          <h3>Market Leader for 25+ Years</h3>
          <p>
            InayIT is a dynamic IT consultancy startup based in the UK, powered
            by a team of ambitious professionals with over 20 years of industry
            expertise. Building on a solid foundation in IT infrastructure and
            service delivery, we have successfully completed numerous projects
            across India and the US under the name Cilicosys. Now, as InayIT, we
            are expanding into the UK market, bringing innovative solutions and
            our extensive experience to address the diverse needs of businesses.
          </p>
          <Link to="/#contact-us">
            <button className="about-us-contact-button">Contact Us</button>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
