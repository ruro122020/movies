import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const Movies = () => {
  const[sortBy, setSortBy] = useState('')
  const [titleSearch, setTitle] = useState('')
  const [genreSearch, setGenreSearch] = useState('')
  const movies = useOutletContext()

  const handleSort =(e)=>{
    setSortBy(e.target.value)
  }

  const filteredMovies =()=>{
    const copyMovies = [...movies]
    if(sortBy === '' && titleSearch === '' && genreSearch === '') {
      return movies
    }

    if(sortBy === 'Alphabet'){
      //sort movies in alphabetical order
      copyMovies.sort((movieA, movieB) => {
        const nameA = movieA.title.toUpperCase();
        const nameB = movieB.title.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return copyMovies
    }

    if(sortBy === 'Rating'){
      //sort movies by rating greatest to least
      copyMovies.sort((movieA, movieB) =>movieB.selectRating - movieA.selectRating );
      return copyMovies
    }
  }

  const formatMovies = filteredMovies()

  const displayMovies = formatMovies.map(movie => <MovieCard key={movie.id} title={movie.title} id={movie.id} rating={movie.selectRating}/>)

  return (
    <div>
      <input type='search' placeholder='Search Title...' />
      <input type='search' placeholder='Search Genre...' />
      <div>
        <strong>Sort By</strong>
        <label>
          <input 
          type="radio" 
          name="sort" 
          value="Alphabet" 
          checked={sortBy==='Alphabet'} 
          onChange={handleSort}/>
          Alphabet
        </label>
        <label>
          <input 
          type="radio" 
          name="sort" 
          value="Rating" 
          checked={sortBy === 'Rating'}
          onChange={handleSort}
          />
          Rating 
        </label>

      </div>
      <h1>Movies</h1>
      {displayMovies}
    </div>
  )
}

export default Movies
