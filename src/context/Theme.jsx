'use client'

import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    function AdjustTheme() {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, AdjustTheme }}>
                <div className={`themeTrans ${theme}`}>
                    {children}
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider