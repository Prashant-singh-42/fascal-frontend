import {useEffect} from 'react'
import Navbar from './Navbar'
import { Outlet,useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate authentication check (replace with your actual logic)
    const storedToken = localStorage.getItem('jwt');
    if (!storedToken) 
      navigate("/auth")
  }, []);

  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Home