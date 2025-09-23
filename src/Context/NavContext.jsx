import React, { createContext, useState } from "react";
import Navbar from "../Components/Navbar";

export const NavContext = createContext();

export default function NavProvider({ children }) {
  const [menu, setMenu] = useState(false);
  
  const menuHandler = () => {
    setMenu((prev) => !prev);
  };
  return (
    <NavContext.Provider value={{menu,setMenu, menuHandler}}>
      {children}
    </NavContext.Provider>
  );
}
