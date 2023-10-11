import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "",
    darkMode: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider

// custom hook
export default function useTheme(){
    return useContext(ThemeContext)
};