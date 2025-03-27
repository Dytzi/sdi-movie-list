import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [movies, setMovies] = useState([
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ])




  return (
    <>
      {movies.map((movie) => (
        <p key = {movie.id}>{movie.title}</p>
      ))}
    </>
  )
}

export default App
