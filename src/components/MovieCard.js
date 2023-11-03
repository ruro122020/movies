import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({title, id}) => {
 
  return (
    <div>
      <h3>{title}</h3>
     <Link to={`/movie/${id}`} >View Movie</Link>
    </div>
  )
}

export default MovieCard
