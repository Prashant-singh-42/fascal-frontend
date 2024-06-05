import React from 'react'
import MovieCard from './MovieCard'
function BaseMovies() {
  return (
    <div className=' w-11/12 mx-auto flex flex-wrap'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </div>
  )
}

export default BaseMovies