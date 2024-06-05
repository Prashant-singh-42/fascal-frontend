import { useState,useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import './auth.css'
import { useNavigate } from "react-router-dom";

function Starter() {
  const [view, setView] = useState("basic");
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate authentication check (replace with your actual logic)
    const storedToken = localStorage.getItem('jwt');
    if (storedToken) navigate("/")
  }, []);

  return (
    <div className="main">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Login
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Register
        </h3>
      </nav>
      {view === "basic" ? <Login /> : <Register />}
    </div>
  );
}

export default Starter;
