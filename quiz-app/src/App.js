import React from "react"
import Home from "./pages/Home"
import Setting from "./pages/Setting"
import QuizForm from "./pages/QuizForm"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'



export default function App() {

  return (
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Home />}></Route>
          <Route path="/Setting" element={<Setting />}></Route>
          <Route path="/QuizForm" element={<QuizForm />}></Route>
        </Routes>
      </Router>
  );

}

