import React, { useEffect, useState } from 'react'
import { LanguagContext } from '.';

function RootContext({children}) {
    const [isDark, setIsDark] = useState(false)
    const [language, setLanguage] = useState("en-US")
    const [corzina,setCorzina] = useState([])

const getCorzina = () => {
    let cor = JSON.parse(localStorage.getItem("corzina")) || []
    setCorzina(cor)
}

useEffect(() => {
    getCorzina();
}, [])

    return (
        <LanguagContext.Provider value={{
             isDark,
             setIsDark,
             language,
             setLanguage,
             corzina,
             setCorzina
        }}>
            {children}
        </LanguagContext.Provider>
    )
}

export default RootContext;
