// import React from 'react'

import { useEffect, useState } from "react";
import BaseMovies from "./BaseMovies";
import axios from "axios";

const OMDbApiKey = 'a88f5a4'; 

function SearchPage() {

  const [search, setSearch] = useState("")
  const [data, setData] = useState(null)
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://omdbapi.com/?s=${search}&apikey=${OMDbApiKey}`);
      setData(response.data.Search || []); // Handle potential empty response
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {

  }, [data])



  return (
    <div style={{height: "100%"}} className="seach-main">
      <label className="input input-bordered flex items-center gap-2 sbar" > 
        <input type="text" className="" placeholder="Search for Movies" value={search} onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(event) => {
          if (event.key == "Enter"){
            fetchData()
          }}}  
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className='movies-parent'>
        { data ? <BaseMovies movies={data}/>: ""}
      </div>
    </div>
  );
}

export default SearchPage;
