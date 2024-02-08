import React from "react"
import Home from "./components/Home"
import Difficulty from "./components/Difficulty"
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

