import { useState,useEffect } from "react";
// import AdvancedForm from "./components/AdvancedForm";
import "./App.css";
import Starter from "./components/Starter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from "./components/Movies";
import MyWishList from "./components/MyWishList";
import PublicWishList from "./components/PublicWishList";
import SearchPage from "./components/SearchPage";
import OpenWIshList from "./components/OpenWIshList";
import Home from "./components/Home";

function App() {  
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/auth" element={<Starter />} />
         <Route path="/" element={<Home />}>
           <Route index element={<Movies />} />  {/* Default route for "/" */}
           <Route path="/MyWishList" element={<MyWishList />} />
           <Route path="/PublicWishList" element={<PublicWishList />} />
           <Route path="/SearchMovies" element={<SearchPage />} />
           <Route path="/OpenWishList" element={<OpenWIshList />} />
         </Route>
       </Routes>
     </BrowserRouter>
  );
}


    // "@emotion/react": "^11.11.4",
    // "@emotion/styled": "^11.11.5",
    // "@mui/material": "^5.15.19",

export default App;