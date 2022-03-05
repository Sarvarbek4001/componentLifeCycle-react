import React from 'react'
import "./Header.css"
import useTheme from '../../Hooks/useTheme'
import Content from '../Content/Content';
import useLanguage from '../../Hooks/useLanguage';
export function Header(props) {

    const [theme,setTheme] = useTheme();
    const [lang,setLang] = useLanguage();
    
   
    return (
        <>
            <header className={`header ${theme}`}>
            
                <h1 className="heading">{Content[lang].header}</h1>
                <select value={theme} onChange={(evt)=>{
                    setTheme(evt.target.value)
                }}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>

                <select value={lang} onChange={(evt)=>{
                    setLang(evt.target.value)
                }}>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                </select>

            </header>
        </>
    )
}
