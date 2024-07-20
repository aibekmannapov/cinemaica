import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { API_KEY } from '../../API'
import { useParams } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import MovieActors from '../../components/MovieActors';
import user from "../../assets/img/images.png"
import { LanguagContext } from '../../context';

function ActorsDetails() {
    const [span, setSpan] = useState(false)
    const [actor, setActor] = useState({})
    const {language} = useContext(LanguagContext)
let {personId} = useParams()
    const getImg = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`).then((res) =>{
    setActor(res.data)
        })
    }
    console.log(actor);
    
    useEffect(() => {
    getImg(API_KEY)
    }, [language])

    return (
        <div id='actorsDetails'>
            <div className="container">
                <div className="actorsDetails">
{
    <div className="actorsDetails--card">
        <div className="actorsDetails--card__block1">
            {
                actor.profile_path === null ? <img src={user} alt="img"/> :   <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path
            }`} alt="" />
            }
          
{actor.birthday && actor.place_of_birth && actor.also_known_as ? <h1>Персональная информация</h1> : null}
{ actor.birthday ? <h2>Дата рождения</h2> : null}
{actor.birthday ? <h3>{actor.birthday}</h3> : null}
{ actor.place_of_birth ? <h4>Место рождения</h4> : null}
{actor.place_of_birth ? <h5>{actor.place_of_birth}</h5> : null}
{!actor.also_known_as ? <h6>Также известность как</h6> : null}
{ actor.also_known_as ? <p>{actor.also_known_as}</p> : null}
        </div>
      <div className="card--block2">
      <div className="actorsDetails--card__block2">
            <h1>{actor.name}</h1>
            {actor.biography ? <h2>Биография</h2> : null}
          { actor.biography ? <h3>{ span === false ? actor.biography.slice(0,299) : actor.biography} <span onClick={() => {
            setSpan(!span)
          }}>{span ? "Закрыть" : "Читать ещё"}<RiArrowRightSLine /></span></h3> : null}
        </div>
        <MovieActors actorsId = {personId}/>
      </div>
       
    </div>
}
                </div>
            </div>
        </div>
    )
}

export default ActorsDetails
