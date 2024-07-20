import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { API_KEY } from '../../API'
import { useParams } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import Actors from '../../components/Actors';

import Videos from '../../components/Videos';
import { LanguagContext } from '../../context';

function MovieDetails() {
    const {language, corzina, setCorzina} = useContext(LanguagContext)
    const [details, setDetails] = useState({})
    const [litl1,setLitl1] = useState(false)
    const [litl2,setLitl2] = useState(false)
    const [litl3,setLitl3] = useState(false)
    const [block,setBlock] = useState(false)


    const someCorzina = corzina.some((el) => el.id === details.id)

let {movieId} = useParams()
console.log(movieId);
    const getMovieDetails = (key)  => {
axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`).then((res)=>{
    setDetails(res.data)
})
    }



    useEffect(() => {
        getMovieDetails(API_KEY)
    }, [language])
    console.log(details,"Hello");

    const addCorzina = (data) => {
let findCorzina = corzina.find((el) => el.id === details.id)
if(findCorzina) {
let filterCorzina = corzina.filter((el) => el.id !== details.id)
setCorzina(filterCorzina)
} else {
    localStorage.setItem("corzina", JSON.stringify([...corzina, details]) )
    setCorzina([data, ...corzina])
}

  
    } 

    let {title,poster_path,release_date,overview,vote_average,runtime,backdrop_path} = details
    return (
   
       <>
        <div id='movieDetails'
        style={{
            background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`
        }}>
            <div className="container">
              <div className="bg" 
              onClick={() => setBlock(false)}
              style={{
                display: block ? "block" : "none"
              }}></div>
                <div className="movieDetails">
                    <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt="" 
                    onClick={() => {
                        setBlock(true)
                    }}
                    />

                    <div className="block"
                    style={{
                        display: block ? "block" : "none"
                    }}>
                    <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt="" 
   className='blockImg' />
   <h2>{title}</h2>
   <h3></h3>
   <h3 className='close' onClick={() => {
    setBlock(false)
   }}>X</h3>
                    </div>
                 <div className="movieDetails--text">
               <div className="movieDetails--lp">
               <h2>{title}</h2>
                    <h1>({release_date?.slice(0,4)})</h1>
               </div>
                  <div className="time">
                 <div className="pl">
                 <h1>{Math.round(vote_average * 10)}%</h1>
                 </div>
                    <h2>{Math.floor(runtime / 60)}h {Math.floor(runtime % 60)}min</h2>
                  </div>
<div className="icons">

<div className='a' onClick={() => {
        setLitl1(!litl1)
     
    }}
    style={{
        color: litl1 ? "green" : "white"
    }}><a><TiThMenu />
</a></div>
<div className='a' onClick={() => addCorzina(details)}
    style={{
        color: someCorzina ? "red" : "white"
    }}><a><FaHeart />
</a></div>
<div className='a' onClick={() => {
        setLitl3(!litl3)
        
    }}
    style={{
        color: litl3 ? "yellow" : "white"
    }}><a><FaBookmark />
</a></div>
</div>
<h5>Обзор</h5>
                  <p>{overview}</p>
                 </div>
                </div>
                
            </div>
            <div className="black"></div>

        </div>
        {
            <Actors actor = {movieId}/>
        }
       {
        <Videos videosId = {movieId}/>
       }
        </>
    )
}

export default MovieDetails
