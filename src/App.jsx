import { useContext, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import portfolioLogo from "./assets/Portfolio-logo-img.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import { NavContext } from "./Context/NavContext";
import { Outlet } from "react-router-dom";
import Profile from "./Components/Profile";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  const { menu, menuHandler } = useContext(NavContext);
  
  return (
    <>
      <header>
        <div className="hamburger-container">
          <i
            onClick={menuHandler}
            className={`fa-solid ${menu ? "fa-xmark" : "fa-bars"} menu-bar`}
          ></i>
        </div>
        <div className="logo-container">
          <img src={portfolioLogo} alt="logo" />
        </div>
      </header>
      <Navbar />
      <main className={`main ${menu ? "active" : ""}`}>
        <div className="profile-comp-app">
          <Profile />
        </div>
        <section className="content">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
