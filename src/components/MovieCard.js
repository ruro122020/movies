import React from 'react'
import { Link } from 'react-router-dom'
import { Rating, Card } from 'semantic-ui-react'

const MovieCard = ({ movie }) => {
  const { id, title, selectRating, genre } = movie

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Link to={`/movie/${id}`} className="header" >{title}</Link>
        </Card.Header>
        <p>Genre: {genre}</p>
        <p>Rating</p>
        <Rating icon='star' defaultRating={selectRating} maxRating={5} disabled />
      </Card.Content>
    </Card>
  )
}

export default MovieCard
