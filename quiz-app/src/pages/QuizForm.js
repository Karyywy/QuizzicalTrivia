import React from 'react';
import Setting from './Setting';
import { useGlobalContext } from '../Context';

export default function QuizForm() {
const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if(waiting) {
    return <Setting />;
  }

  if(loading){
    return <h2>Loading...</h2>
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
  
  return(
    <main>
        <section className='quiz'>
            <p>Correct Answer: {correct}/{index}</p>
            <article className='quiz-container'>
                <h2 dangerouslySetInnerHTML={{__html:question}}></h2>
                <div>
                    {answers.map((answer, index) => {
                        return (
                            <>
                            <button
                            key={index}
                            style={{width: "60%", textAlign:"center"}}
                            className='btn-btn-info-ans'
                            onClick={() => checkAnswer((correct_answer === answer))}
                            dangerouslySetInnerHTML={{__html:answer}}
                            />
                            </>
                        );
                    }
                    )}
                </div>
            </article>
            <button 
            className='btn-btn-warning-next-qs'
            style={{width:"20%", marginRight:"1rem"}}
            onClick={nextQuestion}>
                Next Question
            </button>
        </section>
    </main>
  )

};

