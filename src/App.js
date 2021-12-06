import React, { useState, useEffect } from 'react';
import Flashcardlist from './Flashcardlist';
import axios from 'axios'
import './App.css'

function App() {
  const [flashcards, setFlashcards]  = useState(SAMPLE_FLASHCARD)

  useEffect(()=>{
    axios.get('https://opentdb.com/api.php?amount=100').then(res => {
      setFlashcards(res.data.results.map((questionItem, index) => {
        const options = [...questionItem.incorrect_answers.map(a => decodeString(a)), questionItem.correct_answer]
        
        return {
          id: index + '-' + Date.now(),
          question: decodeString(questionItem.question),
          answer: decodeString(questionItem.correct_answer),
          options: options.sort(()=> Math.random( - .5))
        }
      }))
      console.log(res.data)
    })
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }

  return (
    <div className="container">
      <Flashcardlist flashcards={flashcards}/>
      
    </div>
  );
}
const SAMPLE_FLASHCARD = [
  {
    id: 1,
    question: '1+1',
    answer: '4',
    options: [
      1,2,3,4
    ]
  }
]

export default App;
