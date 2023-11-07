import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { Header, Segment, Rating } from 'semantic-ui-react'
const MovieProfile = () => {
    const { movies } = useOutletContext()
    const params = useParams()
    const movieObj = movies.find(movie => movie.id === parseInt(params.id))
    const { title, year, time, genre, selectRating } = movieObj
    if (!movies.length) return <h1>Loading ...</h1>
    return (
        <div>
            <Header as='h1' attached='top' textAlign='center'>{title}</Header>
            <Segment attached textAlign='center'>
                <p>Year: {year}</p>
                <p>Time: {time} </p>
                <p>Genre: {genre}</p>
                Rating:
                <Rating icon='star' defaultRating={selectRating} maxRating={5} disabled />
            </Segment>

        </div>
    )
}

export default MovieProfile
