import React from "react";
import {
  DnsOutlined,
  StorageOutlined,
  CloudOutlined,
  EngineeringOutlined,
  SecurityOutlined,
  InventoryOutlined,
} from "@mui/icons-material";
import "./services.css";
export default function ServicesSection() {
  const services = [
    {
      title: "Core IT Infra Services",
      description:
        "Our Infrastructure Services provide a solid foundation for your IT environment, ensuring seamless operations and scalability.",
      Icon: DnsOutlined,
    },
    {
      title: "Data Center Management",
      description:
        "Our Data Center Services optimize your IT operations with cutting-edge solutions designed for reliability and efficiency.",
      Icon: StorageOutlined,
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage the full potential of the cloud with our comprehensive Cloud Services.",
      Icon: CloudOutlined,
    },
    {
      title: "IT Consulting Services",
      description:
        "Our Consulting Services provide strategic guidance and technical expertise to help you achieve your IT goals.",
      Icon: EngineeringOutlined,
    },
    {
      title: "Advanced Cyber Defence Services",
      description:
        "In a world of ever-evolving cyber threats, our Cybersecurity Services provide comprehensive protection for your business.",
      Icon: SecurityOutlined,
    },
    {
      title: "IT Procurement Services",
      description:
        "Optimize your technology investments with our IT Procurement Services.",
      Icon: InventoryOutlined,
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="card-container">
        {services.map(({ title, description, Icon }, index) => (
          <div key={index} className="service-card">
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
        ))}
      </div>
    </section>
  );
}
