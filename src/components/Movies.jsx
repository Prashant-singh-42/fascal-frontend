import React, { useEffect, useState } from 'react'
import BaseMovies from './BaseMovies'
import axios from 'axios';

const OMDbApiKey = 'a88f5a4'; 
const data = [
  {
      "Title": "The ABC Murders",
      "Year": "2018",
      "imdbID": "tt8463714",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"
  },
  {
      "Title": "ABC Afterschool Specials",
      "Year": "1972–1997",
      "imdbID": "tt0202179",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTY2MmRiZjQtM2MyMC00MDViLThhMjUtYzZiN2JkYzA4NDE5XkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_SX300.jpg"
  },
  {
      "Title": "ABC Africa",
      "Year": "2001",
      "imdbID": "tt0281534",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU5ODc1ODc2Ml5BMl5BanBnXkFtZTcwMzEyOTgyMQ@@._V1_SX300.jpg"
  },
  {
      "Title": "ABC TGIF",
      "Year": "1989–2018",
      "imdbID": "tt0312324",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDY2M2MyZTEtYmZlZi00NTUyLWE4MWItNDg3YmIzY2VjZWYyXkEyXkFqcGdeQXVyMTEwODg2MDY@._V1_SX300.jpg"
  },
  {
      "Title": "ABC World News Tonight with David Muir",
      "Year": "1953–",
      "imdbID": "tt0184090",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWZjYWYyMjctMjIyMS00YzM5LWExYzctZmI4OWFmZDQyNGQ1XkEyXkFqcGdeQXVyNzU5OTQ1MDM@._V1_SX300.jpg"
  },
  {
      "Title": "ABC News Nightline",
      "Year": "1980–",
      "imdbID": "tt0154053",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTNiODgzYWItYmYyNi00NDk1LWEzOGUtNjUyZjg3NmU5YTJhXkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_SX300.jpg"
  },
  {
      "Title": "ABC Weekend Specials",
      "Year": "1977–1995",
      "imdbID": "tt0075471",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjllM2ViM2MtNTJkYi00YjZhLTkyMjEtMzBkZWU1OGQzYTA0XkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg"
  },
  {
      "Title": "Garotas do ABC",
      "Year": "2003",
      "imdbID": "tt0327451",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkMTkyMTMtMmU1MC00MDYyLWEwMWUtMDdiYzYwNmI0ZjZiXkEyXkFqcGdeQXVyMTU2ODc4ODQ@._V1_SX300.jpg"
  },
  {
      "Title": "ABC da Greve",
      "Year": "1990",
      "imdbID": "tt0317051",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDMxN2FjMjAtNTQ4YS00MWE0LWIzMjktZjc0YTUxOTc5YWFkXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_SX300.jpg"
  },
  {
      "Title": "The ABC of Love and Sex: Australia Style",
      "Year": "1978",
      "imdbID": "tt0077116",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjQyNzM5ODEtYmU0OC00OTRhLWI1ZTQtNzBkZWQwZjg4MmQzXkEyXkFqcGdeQXVyNjU1MTEwMjI@._V1_SX300.jpg"
  }
]


function Movies() {

  const [search, setSearch] = useState(null)

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     // const response = await axios.get(`https://omdbapi.com/?s=${"abc"}&apikey=${OMDbApiKey}`);
    //     // setSearch(response.data.Search || []); // Handle potential empty response
    //     setSearch(data)
    //   } catch (err) {
    //     console.error('Error fetching data:', err);
        
    //   }
    // };
    // fetchData();
    setSearch(data)
  }, []);



  return (
    <div className='movies-parent'>
      { search ? <BaseMovies movies={search}/>: ""}
    </div>
  )
}

export default Movies