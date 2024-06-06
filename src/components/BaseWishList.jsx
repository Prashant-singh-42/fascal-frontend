import React from 'react'
import WishlistCard from './WishlistCard'

function BaseWishList({isPublic,wishlists,mywishlist}) {
  return (
    <div className='wishlist-main'>
      {
        wishlists.map((wishlist, index) => <WishlistCard mywishlist={mywishlist} key={index} isPublic={isPublic} wishlist={wishlist}/>)
      }
    </div>
  )
}

export default BaseWishList