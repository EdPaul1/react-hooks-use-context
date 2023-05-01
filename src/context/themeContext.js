import React , { useState }from "react";

const ThemeContext = React.createContext();
function ThemeProvider(props) {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const value = { theme, toggleTheme };

    return <ThemeContext.Provider value={value} {...props} />;

}
export { ThemeContext, ThemeProvider };