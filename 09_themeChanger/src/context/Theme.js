
import React, { useContext }  from "react";

export const ThemeContext = React.createContext({
    theme:'light',
    themeToggele:()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
   return useContext(ThemeContext)
}

