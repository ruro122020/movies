import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
const MovieProfile = () => {
    const movies = useOutletContext()
    const params = useParams()

    const movieObj = movies.find(movie => movie.id === parseInt(params.id))
    const {title, year, time, genre, selectRating} = movieObj
  return (
    <div>
      <h1>{title}</h1>
      <p>Year: {year}</p>
      <p>Time: {time} </p>
      <p>Genre: {genre}</p>
      <p>Rating: {selectRating}</p>

    </div>
  )
}

export default MovieProfile
