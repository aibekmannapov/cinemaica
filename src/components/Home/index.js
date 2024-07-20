import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { LanguagContext } from '../../context';


function Home() {
  const [backg, setBackg] = useState([])
const {language} = useContext(LanguagContext)
function getHome () {
  axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=${language}&page=1}`).then((res) => {
    console.log(res.data.results);
    setBackg(res.data.results.map((el) => el.backdrop_path))
    }).catch((res) => console.log(res.data.massage))
}

useEffect(()=>{
getHome()
}, [language])

const randomIndx = Math.floor(Math.random() * backg.length);
const randomBg = backg[randomIndx]

    return (
 
        <div id="home" 
        style={{
          background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${randomBg})`
      }}>
          
        <div className="container">
            <div className="home">
            <h1>Фильмы, сериалы и многое другое без ограничений</h1> 
            <h2>Смотрите где угодно. Отменить подписку можно в любое время.</h2>
            <h3>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</h3>
               <div className="home--block">
                <input type="text" placeholder='Адрес электронной почты'/>
                <button>Начать смотреть</button>
               </div>
            </div>
        </div>
        <div className="home--blot">
          <h1></h1>
        </div>
        <div className="home--top"></div>
<div className="home2">
  <div className="home2--text">
  <h1>Смотрите на телевизоре</h1>
  <p>Смотрите на Smart TV, PlayStation, Xbox,</p>
  <h2> Chromecast, Apple TV, плеерах Blu-ray и других устройствах.</h2>
  </div>
 <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
</div>
<div className="home2--top2"></div>
<div className="home3">
    <div className="home3--text">
      <div className="home3--text__img">
    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />

      </div>
<div className="home3--text__bl">
<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
<div className="home3--text__bl--num">
<h1>Очень странные дела</h1>
<p>Идет загрузка...</p>
</div>
</div>

    </div>
    <div className="home3--text2">
      <h1>Загружайте сериалы для просмотра офлайн</h1>
      <p>Сохраняйте любимые видео, и у вас всегда будет что посмотреть.</p>
    </div>
   
  </div>
<div className="top3"></div>
<div className="home4">
  <div className="home4--num">
    <h1>Смотрите где угодно</h1>
    <h2>Смотрите фильмы и сериалы на </h2>
    <p>телефоне, планшете, ноутбуке и телевизоре.</p>
  </div>
  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
</div>
<div className="top3"></div>
<div className="home5">
<img src="https://occ-0-3428-38.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" alt="" />

<div className="home5--img">
  <h1>Создавайте профили для детей</h1>
  <p>Подарите детям мир приключений с их любимыми героями. Он создан специально для них и уже доступен с вашей подпиской.</p>
</div>
</div>
<div className="top3"></div>
      </div>
    )
}

export default Home;
