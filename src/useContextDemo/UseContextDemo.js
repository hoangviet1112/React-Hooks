import React, { createContext, useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }    
}

const ThemeContext = createContext(themes.light)

export default function UseContextDemo() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />    
    </ThemeContext.Provider>    
  )
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton />    
    </div>    
  )
}

function ThemeButton() {
  const theme = useContext(ThemeContext)
  
  return (
    <button style={{ background: theme.background, color:theme.foreground }}>
      I am styled by theme context!    
    </button>    
  )
}




