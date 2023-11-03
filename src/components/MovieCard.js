import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ title, id, rating }) => {

  return (
    <div>
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
      <Link to={`/movie/${id}`} >View Movie</Link>
    </div>
  )
}

export default MovieCard
