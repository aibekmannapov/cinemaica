import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CgDarkMode } from "react-icons/cg"
import logo from "../../assets/img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
import { LanguagContext } from '../../context'
import { FaHeart } from "react-icons/fa6";


function Header() {
    const [inputValue, setInputValue] = useState("")
    const {isDark,setIsDark,language,setLanguage, corzina} = useContext(LanguagContext)
const nav = useNavigate()
    return (
       <div id="header" style={{
        background: isDark ? "black" : "#0f1a48"
       }}>
        <div className="container">
            <div className="header">
                <img src={logo} alt="img" width={200}/>
                <div className="header--nav">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/popular"}>Popular</Link>
                    <Link to={"/toprated"}>TopReted</Link>
                </div>
                <select onChange={(e) => {
                   setLanguage(e.target.value)
                }}>
                    <option value="en-US">English</option>
                    <option value="ru-RU">Русский</option>
                    <option value="fr-FR">France</option>
                </select>
                <div className="header--search">
                    <input type="text" placeholder='search...' 
                    onInput={(e) => setInputValue(e.target.value)}/>
                    <button onClick={() => nav(`/search/${inputValue}`)}>search</button>
                   
                </div>
             <Link to={"/corzina"}><a className='header--top'><FaHeart /></a></Link>
                <a className='header--dark'onClick={() => setIsDark(!isDark)}>
                 <CgDarkMode/>   
                </a>
               {corzina.length ? <h1>{corzina.length}</h1> : null}
            </div>
        </div>
       </div>
    )
}

export default Header
