import axios from "axios";
import { useState } from "react"
import React from "react"
import Home from "./pages/Home"
import Setting from "./pages/Setting"
import QuizForm from "./pages/QuizForm"
import { BrowserRouter, Routes, Route} from 'react-router-dom';



export default function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async (amount ="", category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    }

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



