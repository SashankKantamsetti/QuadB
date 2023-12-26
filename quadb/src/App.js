import './App.css';
import React from "react";
import Home from "./Pages/Home";
import ShowDes from './Pages/ShowDes';
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ShowDes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
