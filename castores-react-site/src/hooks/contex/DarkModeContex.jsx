import { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const DarkModeContex = createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContex);
};

const DarkMode = ({ children }) => {
    const [darkMode, setDarkModeState] = useState(false);
    const darkMaterial = {
        palette: {
            mode: "dark",
            primary: {
                main: "#404040",
            },
            secundary: {
                main: "#66664c",
            },
        },
    };

    const lightMaterial = {
        palette: {
            mode: "light",
            primary: {
                main: "#813F2B",
            },
            secundary: {
                main: "#EEE9DF",
            },
        },
    };

    const darkTailwind = {
        primary: {
            main: "bg-neutral-900",
            color: "white",
            border_color: "hover:border-[#2E3192]",
            text: "text-white",
        },
        secundary: {
            main: "bg-stone-800",
            main_contrast: "bg-stone-600",
            color: "white",
            border_color: "hover:border-[#2E3192]",
            background: "bg-[#66664c]",
        },
    };

    const lightTailwind = {
        primary: {
            main: "bg-white",
            color: "black",
            border_color: "hover:border-[#2E3192]",
            text: "text-black",
        },
        secundary: {
            main: "bg-gray-300",
            main_contrast: "bg-[#EEE9DF]",
            color: "black",
            border_color: "hover:border-[#2E3192]",
            background: "bg-[#EEE9DF]",
        },
    };

    const themeMaterial = createTheme(darkMode ? darkMaterial : lightMaterial);

    const themeTatailwind = darkMode ? darkTailwind : lightTailwind;

    const setDarkMode = (darkModeBool) => {
        localStorage.setItem("darkMode", darkModeBool);
        setDarkModeState(darkModeBool);
    };

    useEffect(() => {
        const darkModeLocal = localStorage.getItem("darkMode");
        if (darkModeLocal !== null) {
            setDarkModeState(JSON.parse(darkModeLocal));
        } else {
            localStorage.setItem("darkMode", false);
        }
    }, []);

    return (
        <DarkModeContex.Provider
            value={{ darkMode, themeTatailwind, setDarkMode }}
        >
            <ThemeProvider theme={themeMaterial}>{children}</ThemeProvider>
        </DarkModeContex.Provider>
    );
};

export default DarkMode;
