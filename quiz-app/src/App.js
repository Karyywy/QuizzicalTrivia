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
      `https://opentdb.com/api.php?${amount && `&amount=${amount}`}${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
    }

  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/Setting"} 
          element={<Setting fetchQuestions={fetchQuestions}/>}>
          </Route>
          <Route path={"/QuizForm"} 
          element={<QuizForm
            questions = {questions}
            score = {score}
            setScore = {setScore}
            setQuestions = {setQuestions}
          />}></Route>
        </Routes>
    </BrowserRouter>
  
  );
  }



