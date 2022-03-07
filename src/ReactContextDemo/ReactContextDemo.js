import React, { createContext, useContext, useState } from "react";

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

const ThemeContext = createContext(themes)

export default function ReactContextDemo() {
  return (
    <ThemeContext.Provider value={themes}>
      <Toolbar />    
    </ThemeContext.Provider>    
  )
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />    
    </div>    
  )
}

function ThemeButton() {
  const theme = useContext(ThemeContext)

  const [themesValue, setThemesValue] = useState(theme.dark)
  
  return (
    <button onClick={() => setThemesValue(prevState => prevState === theme.dark ? (theme.light) : (theme.dark))} style={{ background: themesValue.background, color:themesValue.foreground }}>
      I am styled by theme context!    
    </button>    
  )
}




