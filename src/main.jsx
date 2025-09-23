import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";
// import NavContext from "./Context/NavContext.jsx";
import NavProvider from "./Context/NavContext.jsx";
import HeroProvider from "./Context/HeroContext.jsx";
import Projects from "./Components/Projects.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <HeroProvider>
              <Home />
            </HeroProvider>
          </>
        ),
      },
      {
        path: "about",
        element: (
          <>
            <About />
          </>
        ),
      },
      {
        path: "skills",
        element:(
          <>
        <Skills />,
          </>
        )
        
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavProvider>
      <RouterProvider router={router} />
    </NavProvider>
  </StrictMode>
);
