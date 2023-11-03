import React from 'react'
import { useOutletContext } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
const Movies = () => {
  const movies = useOutletContext()
  const displayMovies = movies.map(movie=><MovieCard key={movie.id} title={movie.title} id={movie.id}/>)
  return (
    <div>
      <h1>Movies</h1>
      {displayMovies}
    </div>
  )
}

export default Movies
