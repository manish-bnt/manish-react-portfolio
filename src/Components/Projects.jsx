import React from "react";
import "../Components/Projects.css";
import {Link} from 'react-router-dom'
export default function Projects() {
  const projects = [
    {
      img: "/projectImg/todo-img.png",
      title: "Todo App",
      desc: "A simple todo list app with local storage support.",
      tech: ['HTML' , 'CSS' , 'Javascript' , 'React'],
      demo: 'https://reacttodolisttracker.netlify.app/'
    },
    {
      img: "/projectImg/portfolio-screenshot.png",
      title: "Portfolio Website1",
      desc: "My personal portfolio showcasing skills, projects, and contact info.",
      tech: ["HTML", "CSS", "Javascript"],
      demo: "https://manishbasnetportfolio.netlify.app/",
    },
    {
      img: "/projectImg/reactportfolio.png",
      title: "Portfolio Website2",
      desc: "My personal portfolio showcasing skills, projects, and contact info.",
      tech: ["HTML", "CSS", "Javascript", "React"],
      demo: "https://manishbasnetportfolio.netlify.app/",
    },
  ];
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <p className="tech">{`${project.tech}`}</p>
            <div className="buttons">
              <Link className="link" to={project.demo}>Live Demo</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
