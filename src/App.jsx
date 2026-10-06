import { useState } from 'react'
import { movies } from './data/movieData'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
import MovieDetails from './components/MovieDetails'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  console.log(movies)
  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem("movies")
    // return savedMovies ? JSON.parse(savedMovies) : movies

    if(savedMovies){
      return JSON.parse(savedMovies)
    }

     localStorage.setItem("movies", JSON.stringify(movies))
     return movies
  })
  function addmovie(movie) {
    const updatedList = [...movieList, movie]

    setMovieList(updatedList)
    localStorage.setItem("movies", JSON.stringify(updatedList))
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={<MovieList movieList={movieList} />}></Route>
        <Route path="/add" 
        element={<AddMovie addmovie={addmovie} />}></Route>
        <Route path="/movie/:id" 
        element={<MovieDetails movieList={movieList}/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
