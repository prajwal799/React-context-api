import React, { createContext, useState } from "react";
export const Themechange = createContext();
const themes = {
    dark:{
    color:"white",
    background:"black"
    },
    light :{
        color:"black",
        background:"white"
    }
}

function ThemechangeColour({children}){
    const [iscolor , setColor] = useState("light");
    const themeData = themes;
    const toggletheme = () => {
        setColor(iscolor === "light" ? "dark" : "light");
    }
    const value = [{iscolor,themeData},toggletheme];
    return(
        <Themechange.Provider value={value}>{children}</Themechange.Provider>
    )
}
export default ThemechangeColour