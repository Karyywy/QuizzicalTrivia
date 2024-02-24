import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Categories, {} from '../data/Categories'
// import { Link } from "react-router-dom";
// import { useGlobalContext } from '../Context';
 
export default function Setting(fetchQuestions) {
  // const { url, quiz, handleChange, handleSubmit, error} = useGlobalContext();
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);
  
  const navigator = useNavigate() ;

  const handleSubmit = () => {
    if(!amount || !category || !difficulty){
      setError(true);
      return;
    }
    else {
      setError(false)
      fetchQuestions(amount, category,difficulty)
      navigator("/QuizForm")
    }
  };
  console.log(fetchQuestions)

  return(
    <main>
    <div className='home-card'>
        <div className="home-setting">
            <h1 className='home-title'>MASTER MIND</h1>
      </div> 

      {error && (
        <p className='error'>
          Sorry, we could not generate questions, please fill all the fields 😭
        </p>
      )}

      <form className='selectionofquiz'>
        <div className="mb-3">
          <label htmlFor="noOfQuestions" className='noOfQuestions'>Number of Questions</label>
          <input
            type='number'
            name='amount'
            className='form-control'
            placeholder='input between 5 and 20'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            // value={quiz.amount}
            // onChange={handleChange}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            // value={quiz.category}
            // onChange={handleChange}
            style={{width:"250px"}}
            color='#FFF'
          >
            <option selected>choose here</option>
            {
              Categories.map((cat) => (
                <option key={cat.category} value={cat.value}>{cat.category}</option>
              ))
            }
          {/* <option selected>choose here</option>
          <option value="GeneralKnowledge">General Knowledge</option>
          <option value="Film">Film</option>
          <option value="VideoGame">Video Game</option>
          <option value="ScienceComputer">Science:Computer</option>
          <option value="Mythology">Mythology</option>
          <option value="Sport">Sport</option>
          <option value="History">History</option>
          <option value="JapaneseAnimeManga">Japanese Anime & Manga</option> */}
        </select>
        </div>

        <div className="mb-3">
          <label htmlFor="difficulty" className='difficulty'>Difficulty</label>
          <select
            className='form-select'
            name='difficulty'
            id='difficulty'
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            // value={quiz.difficulty}
            // onChange={handleChange}
            style={{width:"250px"}}
          >
          <option selected>choose here</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          </select>
        </div>
      
      <button type='submit' onClick={handleSubmit} 
        className='start-qs-btn'>
          Go!
      </button> 
      </form>
      </div>
      </main>
  );
}