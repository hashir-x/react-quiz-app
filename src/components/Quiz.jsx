import React, { useState } from 'react'
import { QuizData } from '../data/QuizData'
import Result from './Result'

function Quiz() {

  const [currentQuestion,setCurrentQuestion] = useState(0)

  const [score,setScore] = useState(0)

  const [clickedOption,setClickedOption] = useState(0)

  const [result,setResult] = useState(false)

  const nextQuestion = () => {
    updateScore()
    if (currentQuestion<QuizData.length-1 && clickedOption) {
      setCurrentQuestion(currentQuestion+1)
      setClickedOption(0)
    }
    else if(currentQuestion<QuizData.length-1){

    }
    else{
      setResult(true)
    }
  }

  const updateScore = () => {
    if (clickedOption===QuizData[currentQuestion].answer) {
      setScore(score + 1)
    }
  } 


  const reset = () => {
    setCurrentQuestion(0)
    setScore(0)
    setResult(false)
    setClickedOption(0)
  }

  return (
    <>
      <div className='w-50 shadow'>
        {
          result ? <Result score={score} restart={reset}/> :
        <>
          <h2 className='text-center'>Quiz App</h2>
          <div className='quiz'>
            <div className='quiz-question mb-4 ms-3 me-3 '>
              <span>{currentQuestion + 1}/10</span>
              <h4>{QuizData[currentQuestion].question}</h4>
            </div>
            <div className='quiz-options d-flex flex-column'>
              {
                QuizData[currentQuestion].options.map((option,i)=>(
                  <button key={i} onClick={()=>setClickedOption(i+1)} className={`option-btn ${
                    clickedOption == i+1?"checked":null
                }`}>
                    {option}
                  </button>
                ))
              }
              <div className='d-flex justify-content-end w-100 pe-5 mb-3'><input className='px-3 py-2 btn btn-primary' type="button"  value={"Next"} onClick={nextQuestion}/></div>
            </div>
          </div>
        </>}
      </div>
    </>
  )
}

export default Quiz