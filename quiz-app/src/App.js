// import axios from "axios";
import React from "react"
import Home from "./pages/Home"
import Setting from "./pages/Setting"
import QuizForm from "./pages/QuizForm"
import { BrowserRouter, Routes, Route} from 'react-router-dom';



export default function App() {
  const fetchQuestions = () => {}

  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/Setting"} element={<Setting fetchQuestions={fetchQuestions}/>}></Route>
          <Route path={"/QuizForm"} element={<QuizForm/>}></Route>
        </Routes>
    </BrowserRouter>
  
  );
  }



