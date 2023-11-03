import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [movies, setMovies] = useState([])
  //movies array is rending twice, why????????????
  useEffect(()=>{
    fetch(`http://localhost:3001/movies`)
    .then(res=> res.json())
    .then(movies => setMovies(movies))
  }, [])
  
  return (
    <div >
      <header>
        <NavBar />
      </header>
      <Outlet context={movies} />
    </div>
  );
}

export default App;
