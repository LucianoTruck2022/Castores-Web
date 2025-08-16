import { createContext, useState, useContext, useEffect } from "react";
import lang_en from "../../langs/en.json";
import lang_es from "../../langs/es.json";

const LangContex = createContext();

export const useLangContex = () => {
    return useContext(LangContex);
};

const Lang = ({ children }) => {
    const [Lang, setLang] = useState("en");
    const LangData = Lang === "en" ? lang_en : lang_es;

    const changeLang = (lang) => {
        setLang(lang);
        localStorage.setItem("lang", lang);
    };

    useEffect(() => {
        const localLang = localStorage.getItem("lang");

        if (localLang !== null) {
            setLang(localLang);
        } else {
            const browserLang = navigator.language || navigator.languages[0];
            const lang = browserLang.startsWith("es") ? "es" : "en";

            setLang(lang);
            localStorage.setItem("lang", lang);
        }
    }, []);

    return (
        <LangContex.Provider
            value={{ lang: LangData, langCode: Lang, changeLang }}
        >
            {children}
        </LangContex.Provider>
    );
};

export default Lang;
