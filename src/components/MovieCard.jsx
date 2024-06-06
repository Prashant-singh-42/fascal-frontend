import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
// const userId = JSON.parse(localStorage.getItem("jwt"))
const baseurl = "https://fascal.onrender.com/"
// const baseurl = "http://localhost:3000/"


function MovieCard({movie,mywishlist,wishlistid, setDeleted}) {
  const [optionss, setOptionss] = useState([])
  const [make, setMake] = useState("")
  const [selected, setSelected] = useState(null)
  const [userId, setUserId] = useState(null)


  const fetchWishlist = async () => {
    try{
      const response = await axios.get(baseurl + `wishlist/userWishlists/${userId}`, { withCredentials: true })
      if (response.data) {
        setOptionss(response.data)
      }
    } catch (e) {
      console.log("there was an error fetching lists")
    }
  }
  


  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("jwt")).user)
    
  },[])

  useEffect(()=>{
    fetchWishlist()
  },[userId])

  const handleSubmit = async () => {
    try{
      const response =await axios.post(baseurl + "wishlist/wishlists",{title: make, userId}, { withCredentials: true })
      fetchWishlist()
      console.log(response)
    } catch (e) {
      console.log("there was an error fetching lists")
    }
  }

  const favorite = async () => {
    try{
      const response =await axios.post(baseurl + `wishlist/wishlists/${selected}/movies`, movie, { withCredentials: true })
      fetchWishlist()
      console.log(response)
    } catch (e) {
      console.log("there was an error fetching lists")
    }
  }

  const deleteMovie = async () => {
    try{
      const response =await axios.post(baseurl + `wishlist/wishlists/${wishlistid}/delmovies`, movie, { withCredentials: true })
      setDeleted(movie)
      console.log(response)
    } catch (e) {
      console.log("there was an error fetching lists")
    }
  }
  
  return (
    <div
      className={`card bg-base-100 shadow-xl image-full m-10 movie-card`}
    >
      <dialog id={`detail-${movie.imdbID}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={movie.Poster}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.Title}</h2>
              <div className="badge badge-accent badge-outline"> {movie.Year} </div>
              <div className="badge badge-primary badge-outline"> {movie.Type} </div>
              {/* <div className="badge badge-secondary badge-outline">secondary</div> */}
              {/* <div className="badge badge-accent badge-outline">accent</div> */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={()=>document.getElementById(`wishlist-${movie.imdbID}`).showModal()}>WishList</button>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop" style={{maxWidth: "100vw"}}>
          <button>close</button>
        </form>
      </dialog>

      <dialog id={`wishlist-${movie.imdbID}`} className="modal">
        <div className='modal-box w-8/12 max-w-5xl flex flex-row' style={{justifyContent: "space-between"}}>
          <div className="flex flex-row" style={{justifyContent: "space-between", width: "24rem"}}>
          <select className="select select-primary w-full max-w-xs" onChange={(e) => {setSelected(e.target.value)}}>
            <option disabled selected>Select A Playlist</option>
            {
              optionss ? optionss.map((option, index) => <option key={index} value={option._id} > {option.title} </option>) : ""
            }
          </select>
            <button className="btn" onClick={() => {
              document.getElementById(`wishlist-${movie.imdbID}`).close()
              favorite()
              } }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
          </div>
          <button className="btn btn-secondary" onClick={()=>document.getElementById(`makenew-${movie.imdbID}`).showModal()}>Make New WishList</button>
        </div>
        <form method="dialog" className="modal-backdrop mx-14" style={{maxWidth: "100vw"}}>
          <button>close</button>
        </form>
      </dialog>

      <dialog id={`makenew-${movie.imdbID}`} className="modal">
        <div className="modal-box w-8/12 max-w-5xl flex flex-row" style={{justifyContent: "space-between"}}>
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={make} onChange={(e) => {setMake(e.target.value)}}/>
          <button onClick={() => { 
            document.getElementById(`makenew-${movie.imdbID}`).close()
            handleSubmit()
            }} 
            className="btn btn-outline btn-primary">Submit</button>
        </div>
        <form method="dialog" className="modal-backdrop" style={{maxWidth: "100vw"}}>
          <button>close</button>
        </form>
      </dialog>

      <figure style={{width:"100%", height:"100%"}}>
        <img
          src={movie.Poster}
          alt="Shoes"
        />
      </figure>
      <div className="card-body w-full flex flex-col space-y-40 ">
        <h2 className="card-title">{movie?.Title}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end">
        {mywishlist? <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => deleteMovie()}>✕</button> : ""}
          <button
            className="btn btn-sm btn-primary"
            onClick={() => document.getElementById(`detail-${movie.imdbID}`).showModal()}
          >
            WishList
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;