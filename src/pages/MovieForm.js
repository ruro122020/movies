import React, { useState, useSyncExternalStore } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Button, Form, Message, Segment } from 'semantic-ui-react'
const MovieForm = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)
  const { handleAddMovie, movies } = useOutletContext()
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    time: '',
    genre: '',
    selectRating: '',
  })
  const countryOptions = [
    { key: 1, value: 1, text: 1 },
    { key: 2, value: 2, text: 2 },
    { key: 3, value: 3, text: 3 },
    { key: 4, value: 4, text: 4 },
    { key: 5, value: 5, text: 5 },
  ]
  //helper function 
  const checkIfMovieExist = (newMovie) => {
    const movieExist = movies.find(movie => movie.title.toLowerCase() === newMovie.title.toLowerCase())
    return movieExist
  }
  //handle event changes
  const handleChange = (e, data) => {
    //data comes from the Form.Select component
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value, [data.name]: data.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
      ...formData,
      selectRating: parseInt(formData.selectRating),
      year: parseInt(formData.year)
    }

    setFormData({
      title: '',
      year: '',
      time: '',
      genre: '',
      selectRating: '',
    })

    const movieExist = checkIfMovieExist(newMovie)

    if (movieExist) {
      alert('Movie already Exist')
      return
    } else {
      fetch(`http://localhost:3001/movies`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(newMovie)
      })
        .then(res => res.json())
        .then(movie => {
          handleAddMovie(movie)
          setFormSubmitted(true)
        })
    }
  }

  return (
    <Segment>
      <Segment textAlign='center'><h1>Add a Movie</h1></Segment >
      <Form success onSubmit={handleSubmit}>
        <Form.Group widths={3}>
          <Form.Input
            label="Title"
            placeholder='Title'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
          <Form.Input
            label="Year"
            placeholder='Year'
            name='year'
            value={formData.year}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths={3}>
          <Form.Input
            label="Time"
            placeholder='Time'
            name='time'
            value={formData.time}
            onChange={handleChange}
          />
          <Form.Input
            label="Genre"
            placeholder='Genre'
            name='genre'
            value={formData.genre}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths={3}>
          <Form.Select
            label='Rate'
            placeholder='Select Rating'
            options={countryOptions}
            name='selectRating'
            value={formData.selectRating}
            onChange={(e, data) => handleChange(e, data)}
          />

        </Form.Group>
        {formSubmitted && <Message
          success
          header='Movie Submitted' />
        }
        <Button>Submit</Button>
      </Form>
    </Segment>

  )
}

export default MovieForm
