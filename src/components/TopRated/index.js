import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import MovieCard from "../MovieCard";
import loader from "../../assets/img/Dual Ring@1.5x-1.0s-200px-200px.svg"
import { API_KEY } from "../../API";
import { LanguagContext } from "../../context";

const TopRated = () => {
const [rated, setReted] = useState([])
const [count , setCount] = useState(1)
const {language} = useContext(LanguagContext)
const getRated = (key) => {
    setReted([])
   setTimeout(() => {
    axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${count}`)
    .then((res) => {
      
        setReted(res.data.results) 
    })
    .catch((res) => res.data)
   }, 2000)
}


useEffect(() => {
        getRated(API_KEY)
       
  
}, [count, language])

return (
    <div id = "rated">
        <div className = "container">
            <div className = "rated">
<div className="rated--movie">
{
    rated.length === 0 ? <img src={loader} alt="img"/> : rated.map((el,idx ) => <MovieCard movie = {el} key = {idx}/>)
}
</div>
<div style={{display: rated.length === 0  ? " none": "flex"}} className="rated--pagination">
<button onClick = {() => {
        setCount(count > 1 ? count - 1 : 1)
    }}>PREV</button>

    <h1>{count}</h1>
    
    <button onClick = {() => setCount(count + 1)}>NEXT</button>
               </div>
            </div>
        </div>
    </div>
)
}

export default TopRated;