import React, { useState } from 'react'

const MovieForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    time: '',
    genre: '',
    selectRating: '',
  })

  const handleChange =(e)=>{
    const {name, value} = e.target
   setFormData({...formData, [name]:value})

  }
  
  return (
    <div>
      <h1>Add a Movie</h1>
      <form>
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
