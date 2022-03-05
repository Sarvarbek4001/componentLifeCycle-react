import React from 'react'
import "./Main.css"
import useTheme from '../../Hooks/useTheme'
import Content from '../Content/Content';
import useLanguage from '../../Hooks/useLanguage';
export function Main(props) {
    const [theme] = useTheme();
    const [lang,setLang] = useLanguage();
   
    return (
        <>
            <main className={`main ${theme}`}>
               <h3>{Content[lang].main.main}</h3>
               <p>{Content[lang].main.text}</p>
            </main>
        </>
    )
}
