import axios from "axios"
import React, { useContext, useEffect, useState } from 'react'
import MovieCard from "../MovieCard"
import loader from "../../assets/img/Dual Ring@1.5x-1.0s-200px-200px.svg"
import { API_KEY } from "../../API"
import { LanguagContext } from "../../context"


function Popular() {
    const {isDark} = useContext(LanguagContext)
    const [popular, setPopular] = useState([])
    const [count , setCount] = useState(1)
    const {language} = useContext(LanguagContext)
    const getPopular = (key) => {
        setPopular([])
setTimeout(()=>{
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${count}`
).then((res) => {
    setPopular(res.data.results)
}).catch((res) => console.log(res.data.massage))
}, 2000)
    }
    useEffect(() => {
            getPopular(API_KEY)
    }, [count, language])

    return (
       <div id = "popular">
        <div className = "container">
            <div className = "popular">
<div className = "popular--movie">
    
{
   popular.length === 0 ? <img src={loader} alt="" /> : popular.map((el,idx ) => <MovieCard movie = {el} key = {idx}/>)
}

</div>
<div style={{display: popular.length === 0  ? " none": "flex"}} className = "popular--pagination">
    <button style={{
        border: isDark ? "2px solid white" : "2px solid black"
    }} onClick = {() => {
        setCount(count > 1 ? count - 1 : 1)
    
    }}>PREV</button>
    <h1>{count}</h1>
    <button style={{
        border: isDark ? "2px solid white" : "2px solid black"
    }} onClick = {() => setCount(count + 1)}>NEXT</button>

              </div>
           </div>
         </div>
       </div>
    )
}

export default Popular;
