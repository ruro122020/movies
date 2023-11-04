import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const Movies = () => {
  const [sortBy, setSortBy] = useState('')
  const [titleSearch, setTitleSearch] = useState('')
  const [genreSearch, setGenreSearch] = useState('')
  const movies = useOutletContext()

  const handleSort = (e) => {
    setSortBy(e.target.value)
  }
  const handleSearch = (e) => {
    if (e.target.name === 'title') {
      setTitleSearch(e.target.value)
    } else {
      setGenreSearch(e.target.value)
    }
  }

  const filteredMovies = () => {
    const copyMovies = [...movies]
    return copyMovies.filter(movie => {
      if(titleSearch === '' && genreSearch === '') return true
      if(titleSearch) return movie.title.toLowerCase().includes(titleSearch.toLowerCase())
      if(genreSearch) return movie.genre.toLowerCase().includes(genreSearch.toLowerCase())
    })
    .sort((movieA, movieB) => {
        if(sortBy === 'Alphabet'){
          const nameA = movieA.title.toUpperCase();
          const nameB = movieB.title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }else if(sortBy === 'Rating'){
          return movieB.selectRating - movieA.selectRating
        }
      })
  }

  const formatMovies = filteredMovies()

  const displayMovies = formatMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)

  return (
    <div>
      <form>
        <input
          type='search'
          placeholder='Search Title...'
          name='title'
          value={titleSearch}
          onChange={handleSearch} />
        <input
          type='search'
          placeholder='Search Genre...'
          name='genre'
          value={genreSearch}
          onChange={handleSearch}
        />
        <div>
          <strong>Sort By</strong>
          <label>
            <input
              type="radio"
              name="sort"
              value="Alphabet"
              checked={sortBy === 'Alphabet'}
              onChange={handleSort} />
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
      </form>
      <h1>Movies</h1>
      {displayMovies}
    </div>
  )
}

export default Movies
