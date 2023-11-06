import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'semantic-ui-react'
const MovieCard = ({ movie }) => {
  const { id, title, selectRating, genre } = movie

  return (
    <div className="card">
      <Link to={`/movie/${id}`} className="header" >{title}</Link>
      <p>Genre: {genre}</p>
      <div className="extra">
        Rating:
        <Rating icon='star' defaultRating={selectRating} maxRating={5} disabled />
      </div>
    </div>
  )
}

export default MovieCard
