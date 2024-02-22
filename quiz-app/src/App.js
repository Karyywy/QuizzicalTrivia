import React from "react"
import Home from "./pages/Home"
import Setting from "./pages/Setting"
import QuizForm from "./components/QuizForm"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


export default function App() {

  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Setting' element={<Setting />}/>
      <Route path="QuizForm" element={<QuizForm />}/>
    </Routes>
    <QuizForm />
  </Router>
  );

}

