import React from 'react'
import './MovieList.css'
import { Link } from 'react-router-dom'

const MovieList = ({movieList}) => {
  return (
    <div className='movieList'>
       <h1 className='heading'>Movie List</h1>
        {
          movieList.map((movie)=>(
            <div className='listMovie' key={movie.id}>
              <Link className= 'titleMovie' to={`/movie/${movie.id}`}>
              {movie.title}
              </Link>
              <p className= 'ratingMovie'>
                {"★".repeat(movie.rating)}
                {"☆".repeat(5 - movie.rating)}</p>
            </div>
          ))
        }
        <Link className='addMovie' to="/add">Add New Movie</Link>
     </div>
  )
}

 export default MovieList