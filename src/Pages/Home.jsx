import React, { useContext } from "react";
import "../Pages/Home.css";

import { NavContext } from "../Context/NavContext";
import { HeroContext } from "../Context/HeroContext";
import Profile from "../Components/Profile";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Services from "../Pages/Services";
import Projects from "../Components/Projects";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const { displayText } = useContext(HeroContext);
  const projectsHandler=(e)=>{
    e.preventDefault();
    navigate('/projects')
  }
  return (
    <section className="home-sec">
      <div className="hero-sec">
        <div className="hero-content">
          <div className="hero-title">
            <h1>Manish Basnet</h1>
            <p>{displayText}</p>
          </div>
          <div className="profile-component">
            <Profile />
          </div>
          <div className="cta">
            <button onClick={projectsHandler}>View Projects</button>
            <button>
              <a className="cv-btn-link" href="/docs/manish-bio-data.pdf" download>
                Download CV
              </a>
            </button>
          </div>
        </div>
        {/* <Profile /> */}
      </div>
      <div className="outlet-sec">
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
    </section>
  );
}
