import React, { useContext } from 'react'
import { LanguagContext } from '../../context';
import MovieCard from '../../components/MovieCard';


function Corzina() {
    const {corzina} = useContext(LanguagContext)
    return (
        <div id='popular'>
            <div className="container">
                <div className="popular--movie">
                    {corzina.length ? corzina.map((el) => <MovieCard movie={el}/>) : <h1>У вас пока нету фильмов в исбрaнных</h1>}
                </div>
            </div>
        </div>
    )
}

export default Corzina;
