import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/movies`)
      .then(res => res.json())
      .then(movies => setMovies(movies))
  }, [])
  const handleAddMovie = (movie) => {
    setMovies([...movies, movie])
  }
  return (
    <div >
      <header>
        <NavBar />
      </header>
      <Outlet context={{ movies: movies, handleAddMovie: handleAddMovie }} />
    </div>
  );
}

export default App;
