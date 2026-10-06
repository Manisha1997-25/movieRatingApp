import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './MovieDetails.css'
const MovieDetails = ({movieList}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const movie = movieList.find((movie)=>movie.id === Number(id))
  if(!movie){
    return<h2>Movie Not Found</h2>
  }
  return (
    <div className='container'>
        <h1 className='headTitle'>{movie.title}</h1>
        <p className='description'>{movie.description}</p>
         <p className='rating'>
        {"★".repeat(movie.rating)}
        {"☆".repeat(5 - movie.rating)}
      </p> 
      <button className ='btnBack' onClick= {() => navigate("/")}>Back</button>
    </div>
  )
}

export default MovieDetails