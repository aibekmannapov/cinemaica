import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../API'
import user from "../../assets/img/images.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LanguagContext } from '../../context'

function MovieActors({actorsId}) {
const {language} = useContext(LanguagContext)
const [actors, setActors] = useState([])

    const getMovieActors = (key) =>{
axios(`https://api.themoviedb.org/3/person/${actorsId}/movie_credits?api_key=${key}&language=${language}`).then((res) => {
setActors(res.data.cast)
})
    }

    useEffect(() => {
getMovieActors(API_KEY)
    },[language])
console.log(actors);

    return (
        <div id='movieActors'>
                <div className="movieActors">
{
    actors.map((el) => (
          <div className="movieActors--block">
<Link to={`/movieDetails/${el.id}`}>
{
    el.backdrop_path === null ? <img src={user} alt="img" height={225}/>
    : <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${el.backdrop_path}`} alt="img" />
}
</Link>
              <h1>{el.title}</h1>
          </div>
            
    ))
}
                </div>
            </div>
      
    )
}

export default MovieActors;
