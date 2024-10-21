"use client";

import React, { createContext, useContext, useState,useEffect } from "react";

interface ThemeContextType{
    mode:string;
    //setMode:(mode:string)=>void;
    toggleTheme:()=>void
}

const ThemeContext = createContext<ThemeContextType|undefined>(undefined);


export function ThemeProvider({children}:{children:React.ReactNode}) {
    const [mode,setMode]=useState("");
    
    // const handleThemeChange=()=>{
    //     if(mode=="dark")
    //     {
    //         setMode("light");
    //         document.documentElement.classList.add("light");
    //     }
    //     else{
    //         setMode("dark");
    //         document.documentElement.classList.add("dark")
    //     }
    // }
    useEffect(() => {
        if (mode === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
      }, [mode]); // Only run when `mode` changes
    
      const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      };
    

    // useEffect(()=>{
    //     handleThemeChange();
    // },[mode])

    return(
        <ThemeContext.Provider value={{mode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme()
{
    const context=useContext(ThemeContext);
    if(context===undefined)
    {
        throw new Error("useTheme must be used within ThemeProvider")
    }
    return context;
}
