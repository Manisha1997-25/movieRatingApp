import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddMovie.css'

const AddMovie = ({addmovie}) => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")
  
  function handleSubmit(e){
    e.preventDefault()

    const newMovie = {
      id: Date.now(),
      title:title,
      description:description,
      rating:Number(rating)
    }

    addmovie(newMovie)
    navigate("/")
  }
  return (
   <form action="" onSubmit={handleSubmit}>
    <h1>Add New Movie</h1>

    <input type="text" placeholder='Title' 
    value={title}
    onChange={(e) =>setTitle(e.target.value)} />

    <textarea name="" id="" 
    placeholder='Description'
    value={description}
    onChange={(e)=>setDescription(e.target.value)}>
    </textarea>

    <input type="Number"
    min="1"
    max="5"
    placeholder='Rating'
    value={rating}
    onChange={(e)=>setRating(e.target.value)}
    />

    <button type='submit'>Add Movie</button>
   </form>
  )
}

export default AddMovie