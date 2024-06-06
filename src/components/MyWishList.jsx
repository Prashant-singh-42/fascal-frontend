import React, { useEffect, useState } from 'react'
import BaseWishList from './BaseWishList'
import axios from 'axios'

const userId = JSON.parse(localStorage.getItem("jwt")).user
// const baseurl = "https://fascal.onrender.com/"
const baseurl = "http://localhost:3000/"



function MyWishList() {
  const [wishlists, setWishlists] = useState(null)
  const fetchWishlist = async () => {
    try{
      const response = await axios.get(baseurl + `wishlist/userWishlists/${userId}`, { withCredentials: true })
      if (response.data) {
        setWishlists(response.data)
      }
    } catch (e) {
      console.log("there was an error fetching lists")
    }
  }
  useEffect(() => {
    fetchWishlist()
  },[])

  

  return (
        wishlists ? 
        <BaseWishList isPublic={true} wishlists={wishlists} mywishlist={true}/> : 
        <div style={{height:"100vh"}} ></div>
  )
}

export default MyWishList