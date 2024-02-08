import React from "react"
import Home from "./pages/Home"
import Difficulty from "./pages/Setting"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/difficulty' element={<Difficulty />} />
      </Routes>
    </Router>
  );

}

