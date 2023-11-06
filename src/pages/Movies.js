import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import FilterMovies from '../components/FilterMovies'

const Movies = () => {
  const [sortBy, setSortBy] = useState('')
  const [titleSearch, setTitleSearch] = useState('')
  const [genreSearch, setGenreSearch] = useState('')
  const { movies } = useOutletContext()

  const filter = movies.filter(movie => {
    if (titleSearch === '' && genreSearch === '') return true
    if (titleSearch) return movie.title.toLowerCase().includes(titleSearch.toLowerCase())
    if (genreSearch) return movie.genre.toLowerCase().includes(genreSearch.toLowerCase())
  })
    .sort((movieA, movieB) => {
      if (sortBy === 'Alphabet') {
        const nameA = movieA.title.toUpperCase();
        const nameB = movieB.title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      } else if (sortBy === 'Rating') {
        return movieB.selectRating - movieA.selectRating
      }
    })
  const displayMovies = filter.map(movie => <MovieCard key={movie.id} movie={movie} />)
  return (
    <div>
      <FilterMovies
        sortBy={sortBy}
        setSortBy={setSortBy}
        titleSearch={titleSearch}
        setTitleSearch={setTitleSearch}
        genreSearch={genreSearch}
        setGenreSearch={setGenreSearch}
      />
      <h1 className='ui header'>Movies</h1>
      <ul className='ui four cards'>
        {displayMovies}

      </ul>
    </div>
  )
}

export default Movies
