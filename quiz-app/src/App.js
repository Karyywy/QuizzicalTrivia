import React from "react"
import Home from "./pages/Home"
import Setting from "./pages/Setting"
import { useGlobalContext } from "./context"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


export default function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestions,
    checkAnswer,
  } = useGlobalContext();

  if(waiting) {
    return <Setting />;
  }

  const {question, incorrect_answers, correct_answer} = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random()* 4);
  if(tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] =correct_answer
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Setting' element={<Setting />} />
      </Routes>
    </Router>
  );

}

