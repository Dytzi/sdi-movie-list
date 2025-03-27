import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const api = "http://localhost:3001"
function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      let movieData = await fetch(`${api}/movies`)
      movieData = await movieData.json()
      console.log(movieData)
      setMovies(movieData)
    }
    fetchMovies()
  }, [])
  
  
  return (
    <>
      {movies.map((movie) => (
        <p key = {movie.movie_id}>{movie.movie_title}</p>
      ))}
    </>
  )
}

export default App
