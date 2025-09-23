import React, { useContext, useState } from "react";
import "../Components/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavContext } from '../Context/NavContext';
export default function Navbar() {
  const {menu, setMenu} = useContext(NavContext);
  const [activeLink, setActiveLink] = useState('/')
  const handleClick = (path)=> {
    setMenu((prev) => !prev)
    setActiveLink(path)
  }

  return (
    <div className={`container head-container ${menu && "active"}`}>
      <nav>
        <Link className={`nav-link ${activeLink==='/' ? 'active': ''}`} to="/" onClick={()=> handleClick('/')}>Home</Link>
        <Link className={`nav-link ${activeLink==='/about' ? 'active': ''}`} to="/about" onClick={()=> handleClick('/about')}>About</Link>
        <Link className={`nav-link ${activeLink==='/skills' ? 'active': ''}`} to="/skills" onClick={()=> handleClick('/skills')}>Skills</Link>
        <Link className={`nav-link ${activeLink==='/contact' ? 'active': ''}`} to="/contact" onClick={()=> handleClick('/contact')}>Contact</Link>
        <Link className={`nav-link ${activeLink==='/services' ? 'active': ''}`} to="/services" onClick={()=> handleClick('/services')}>Services</Link>
        <a className="nav-link"href="/docs/manish-bio-data.pdf" download>
          <span className="download-icon">
            <i className="fa-solid fa-circle-down"></i>
          </span>
          Download CV
        </a>
      </nav>
    </div>
  );
}
