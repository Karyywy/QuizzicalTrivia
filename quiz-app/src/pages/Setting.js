import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../components/Context';
 
export default function Setting() {
   const { quiz, handleChange, handleSubmit, error} = useGlobalContext();

  return(
    <main>
    <div className='home-card'>
        <div className="difficulty-setting">
            <h1 className='home-title'>MASTER MIND</h1>
      </div>
      <form className='selectionofquiz'>
        <div className="mb-3">
          <label htmlFor="noOfQuestions" className='noOfQuestions'>Number of Questions (between 5 and 20)</label>
          <input
            type='number'
            name='amount'
            className='form-control'
            value={quiz.amount}
            onChange={handleChange}
            min={5}
            max={20}
            style={{width:"250px"}}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className='category'>Category</label>
          <select
            className='form-select'
            name='category'
            id='category'
            value={quiz.category}
            onChange={handleChange}
            style={{width:"250px"}}
          >
          <option value="GeneralKnowledge">General Knowledge</option>
          <option value="Film">Film</option>
          <option value="VideoGame">Video Game</option>
          <option value="ScienceComputer">Science:Computer</option>
          <option value="Mythology">Mythology</option>
          <option value="Sport">Sport</option>
          <option value="History">History</option>
          <option value="JapaneseAnimeManga">Japanese Anime & Manga</option>
        </select>
        </div>

        <div className="mb-3">
          <label htmlFor="difficulty" className='difficulty'>Difficulty</label>
          <select
            className='form-select'
            name='difficulty'
            id='difficulty'
            value={quiz.difficulty}
            onChange={handleChange}
            style={{width:"250px"}}
          >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          </select>
        </div>
      {error && (
        <p className='error'>
          ***Sorry, we could not generate questions, please try another option 😭***
        </p>
      )}
      {/* <button
      type='submit'
      onClick={handleSubmit}
      className='start-qs-btn'
      >
        Go!
      </button> */}
      <Link to="/QuizForm" type="submit" onClick={handleSubmit} className='start-qs-btn'>Go!</Link>
      </form>
    </div>
    </main>
  );
}