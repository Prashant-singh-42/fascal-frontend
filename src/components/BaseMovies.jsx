import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { useLocation } from 'react-router-dom'

function BaseMovies({movies}) {
  const location = useLocation()
  const moviess = location?.state?.movies;
  const mywishlist = location?.state?.mywishlist;
  const wishlistid = location?.state?.wishlistid._id;
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState({})

  useEffect(() => {

    if (movies){
      setData([...movies])
    }else {
      setData([...moviess])
    }

    console.log("data",data)
    console.log("movies",movies)
    console.log("moviess", moviess)
  }, [movies])

  useEffect(() => {
    setData(prev => prev.filter((movie,index) => movie.imdbID != deleted.imdbID))
  },[deleted])

  // useEffect(() => {
  //   data.map((movie) => {
  //     console.log(movie)
  //   })
  //   console.log("wishlistid",wishlistid)
  //   console.log("wishlistid",mywishlist)
  // }, [data])
    
  return (
    
    <div className='movies-main'>
      {
        data ? data.map((movie,index) => <MovieCard mywishlist={mywishlist} key={index} movie={movie} wishlistid={wishlistid} setDeleted={setDeleted}/>) : ""
      }
    </div>
  )
}

export default BaseMovies