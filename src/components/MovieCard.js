import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
const {id, title, selectRating, genre} = movie

  return (
    <div>
      <h3>{title}</h3>
      <p>Rating: {selectRating}</p>
      <p>Genre: {genre}</p>
      <Link to={`/movie/${id}`} >View Movie</Link>
    </div>
  )
}

export default MovieCard
