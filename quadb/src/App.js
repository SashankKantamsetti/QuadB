import './App.css';
import React from "react";
import Home from "./Pages/Home";
import ShowDes from './Pages/ShowDes';
import Booking from './Pages/Booking';
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ShowDes />} />
        <Route path='/:id/:name' element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
