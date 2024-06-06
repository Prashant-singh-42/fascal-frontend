import React, { useEffect, useState } from 'react'
import BaseWishList from './BaseWishList'
import axios from 'axios'

const baseurl = "https://fascal.onrender.com/"
// const baseurl = "http://localhost:3000/"

function PublicWishList() {

  const [wishlists, setWishlists] = useState(null)
  const fetchWishlist = async () => {
    try{
      const response = await axios.get(baseurl + `wishlist/publicWishlists`, { withCredentials: true })
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
        <BaseWishList isPublic={false} wishlists={wishlists}/> : 
        <div style={{height:"100vh"}} ></div>
  )
}

export default PublicWishList