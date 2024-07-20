import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { API_KEY } from '../../API';
import user from "../../assets/img/images.png"
import { Link } from 'react-router-dom';
import { LanguagContext } from '../../context';
function Actors({actor}) {
const {language} = useContext(LanguagContext)
    const [modul,setModul] = useState([])
 
    const getActors = (key) =>  {
axios(`https://api.themoviedb.org/3/movie/${actor}/credits?api_key=${key}&language=${language}`).then((res) => {
setModul(res.data.cast)
})
    }

useEffect(() =>{
    getActors(API_KEY)
}, [language])
console.log(modul);

    return (
       <div id='actors'>
        <div className="container">     
            <div className="actors">
                {
                    modul.map((el) => (
<div className='actors--text'>
<Link to={`/actorsDetails/${el.id}`}>
{
    el.profile_path === null ? <img src={user} alt="img" />
    : <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${el.profile_path}`} alt="img" />
}</Link>
    <h1>{el.original_name}</h1>
    <h2>{el.character}</h2>
</div>
                    ))
                }
            </div>
        </div>
       </div>
    )
}

export default Actors;
