import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      const response = await axios.get('https://fascal.onrender.com/auth/logout', { withCredentials: true });
      
      if (response.data) {
        localStorage.removeItem('jwt')
      }
      console.log('User logged out successfully', response.data);
      navigate("/auth")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar bg-base-100 my-10 mx-auto w-10/12 rounded-3xl px-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <Link to="/SearchMovies">Seach</Link>
          </li>
          <li>
          <Link to="/">Movies</Link>
          </li>
          <li>
          <Link to="/MyWishList">My Wishlist</Link>
          </li>
          <li>
          <Link to="/PublicWishList">Public Wishlist</Link>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/SearchMovies">Seach</Link>
          </li>
          <li>
          <Link to="/">Movies</Link>
          </li>
          <li>
          <Link to="/MyWishList">My Wishlist</Link>
          </li>
          <li>
          <Link to="/PublicWishList">Public Wishlist</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" onClick={handleClick} >Logout</a>
      </div>
    </div>
  );
}

export default Navbar;
