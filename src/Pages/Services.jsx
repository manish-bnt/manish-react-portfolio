import React from "react";
import "../Pages/Services.css";
export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I build modern, responsive, and user-friendly websites using HTML, CSS, and JavaScript. My goal is to create fast, reliable, and clean websites that look great on any device.",
    },
    {
      title: "Frontend Development",
      description:
        "With React, I design interactive and dynamic interfaces that provide smooth user experiences. I focus on reusable components and scalable designs.",
    },
    {
      title: "Backend Basics",
      description:
        "I have basic knowledge of MongoDB and backend workflows. Currently learning how to integrate frontend with backend to deliver complete solutions.",
    },
    {
      title: "Full-Stack Journey",
      description:
        "I am strong in frontend and improving my backend skills step by step. My aim is to become a complete full-stack developer who can handle everything from design to deployment.",
    },
  ];
  return (
    <section className="services">
      <h2>My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
