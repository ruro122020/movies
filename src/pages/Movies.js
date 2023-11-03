import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
const Movies = () => {
  const[sortBy, setSortBy] = useState('')
  const [titleSearch, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const movies = useOutletContext()
  const displayMovies = movies.map(movie => <MovieCard key={movie.id} title={movie.title} id={movie.id} rating={movie.selectRating}/>)
  return (
    <div>
      <input type='search' placeholder='Search Title...' />
      <input type='search' placeholder='Search Genre...' />
      <div>
        <strong>Sort By</strong>
        <label>
          <input type="radio" name="sort" value="Alphabet" checked={sortBy==='Alphabet'} />
          Alphabet
        </label>
        <label>
          <input type="radio" name="sort" value="Rating" checked={sortBy === 'Rating'}/>
          Rating 
        </label>

      </div>
      <h1>Movies</h1>
      {displayMovies}
    </div>
  )
}

export default Movies
