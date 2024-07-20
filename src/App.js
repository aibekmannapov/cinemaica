import { Route, Routes} from "react-router-dom"
import './App.scss';
import Header from './components/Header';
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Home from "./components/Home";
import MovieDetails from "./Pages/MovieDetails";
import ActorsDetails from "./Pages/ActorsDetails";
import Search from "./components/Search";
import { useContext } from "react";
import { LanguagContext } from "./context";
import Corzina from "./components/Corzina";


function App() {
  const {isDark} = useContext(LanguagContext)
  return (
    <div className = "App" style={{
      background:isDark ? "black" : "white",
      color:isDark ? "white" : "black"
    }}>
<Header/>
<Routes>
  <Route path = "/" element = {<Home/>}/>
  <Route path = "/popular" element = {<Popular/>}/>
  <Route path = "/toprated" element = {<TopRated/>}/>
  <Route path = "/search/:movieName" element = {<Search/>}/>
  <Route path="movieDetails/:movieId" element= {<MovieDetails/>} />
  <Route path="actorsDetails/:personId" element= {<ActorsDetails/>} />
  <Route path="/corzina" element= {<Corzina/>} />
 
</Routes>
    </div>
  );
}

export default App;
