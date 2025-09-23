import React, { createContext, useEffect, useState } from "react";
import Home from "../Pages/Home";

export const HeroContext = createContext();

export default function HeroProvider({ children }) {
  const text = "Frontend Developer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const textArr = text.split("");
    let index = -1;

    const interval = setInterval(() => {
      if (index < textArr.length - 1) {
        index++;
        setDisplayText((prev) => prev + textArr[index]);
        // console.log(index ,':', textArr[index])
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContext.Provider value={{ displayText }}>
      {children}
    </HeroContext.Provider>
  );
}
