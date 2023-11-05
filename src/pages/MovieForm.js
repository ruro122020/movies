import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
const MovieForm = () => {
  const { handleAddMovie } = useOutletContext()
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    time: '',
    genre: '',
    selectRating: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
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

    fetch(`http://localhost:3001/movies`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newMovie)
    })
      .then(res => res.json())
      .then(movie => handleAddMovie(movie))
  }

  return (
    <div>
      <h1>Add a Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type='text' name='title' value={formData.title} onChange={handleChange}></input>
        </div>
        <div>
          <label>Year:</label>
          <input type='text' name='year' value={formData.year} onChange={handleChange}></input>
        </div>
        <div>
          <label>Time:</label>
          <input type='text' name='time' value={formData.time} onChange={handleChange}></input>
        </div>
        <div>
          <label>Genre:</label>
          <input type='text' name='genre' value={formData.genre} onChange={handleChange}></input>
        </div>
        <div>
          <label>Rate:</label>
          <select name='selectRating' value={formData.selectRating} onChange={handleChange} >
            <option>Select One</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default MovieForm
