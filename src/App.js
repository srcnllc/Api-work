import {useState,useEffect} from 'react';
import './App.css';
import MainMovie from './components/Main/MainMovie';
import SearchHeader from './components/header/SearchHeader';

function App() {
  const[typing,setTyping]=useState("");
  const[movieData,setMovieData]=useState([]);
  
  useEffect(() => {
    getMovies();
  },[typing])

  async function getMovies(){
    const response =await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const getData=data.results.filter(item=>item.title.toLowerCase().includes(typing.toLowerCase())).map(i=>{
      return {
        id:i.episode_id,
        title:i.title
      }
    })
    setMovieData(getData);
  }
  function typingStart(e)
  {
    setTyping(e.target.value);

  }

  return (
    <div className="App">
        <SearchHeader typing={typing} typingStart={typingStart}/>
        <MainMovie  movieData={movieData} />
    </div>
  );
}

export default App;
