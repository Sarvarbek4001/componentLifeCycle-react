import React from 'react'
import "./Footer.css"
import Content from '../Content/Content';
import useTheme from '../../Hooks/useTheme'
import useLanguage from '../../Hooks/useLanguage';
export function Footer(props) {
    const [theme] = useTheme();
    const [lang,setLang] = useLanguage();
    return (
        <>
            <footer className={`footer ${theme}`}>
                <h3>{Content[lang].footer}</h3>
            </footer>
        </>
    )
}
