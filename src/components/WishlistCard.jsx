import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const userId = JSON.parse(localStorage.getItem("jwt")).user
// const baseurl = "https://fascal.onrender.com/"
const baseurl = "http://localhost:3000/"


function WishlistCard({ isPublic, wishlist,mywishlist}) {  
  const [edit, setEdit] = useState("")
  const handleEdit = async () => {
    try{
      const response =await axios.post(baseurl + `wishlist/wishlists/${wishlist._id}`,{title: edit}, { withCredentials: true })
      console.log(response)
      window.location.reload();
    } catch (e) {
      console.log("there was an error fetching lists")
    }
  }

  const handleDelete = async () => {
    try{
      const response =await axios.delete(baseurl + `wishlist/wishlists/${wishlist._id}`,{title: edit}, { withCredentials: true })
      console.log(response)
      window.location.reload();
    } catch (e) {
      console.log("there was an error fetching lists")
    }
  }

  const handlePublic = async () => {
    try{
      const response =await axios.post(baseurl + `wishlist/wishlists/${wishlist._id}/visibility`,{
        public: !wishlist.public
      }, { withCredentials: true })
      console.log(response)
      window.location.reload();
    } catch (e) {
      console.log("there was an error fetching lists")
    }
  }



  return (
    <div className="card bg-base-100 shadow-xl wish-card">
      <dialog id={ `edit-${wishlist._id}`} className="modal">
        <div
          className="modal-box w-8/12 max-w-5xl flex flex-row"
          style={{ justifyContent: "space-between" }}
        >
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          />
          <button
            onClick={() => {
              document.getElementById(`edit-${wishlist._id}`).close();
              handleEdit()
            }}
            className="btn btn-outline btn-primary"
          >
            Submit
          </button>
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
          style={{ maxWidth: "100vw" }}
        >
          <button>close</button>
        </form>
      </dialog>

      <div className="card-bodyy">
        <h2 className="card-title">{wishlist.title}</h2>
        <div className="menus">
          <Link to="/OpenWishList" className="btn btn-primary" state={{movies: wishlist.movies, mywishlist, wishlistid: wishlist }}>View</Link>
          {isPublic ? <button className={`btn ${wishlist.public ? "btn-success" : "btn-error"}`} onClick={()=>handlePublic()} >Public</button> : ""}
          {isPublic ? <button className="btn btn-primary" onClick={()=>document.getElementById(`edit-${wishlist._id}`).showModal()}>Edit</button> : ""}
          {isPublic ? <button className="btn btn-primary" onClick={()=>handleDelete()} >Delete</button> : ""}
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
