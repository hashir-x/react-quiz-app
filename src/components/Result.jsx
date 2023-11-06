import React from 'react'

function Result(props) {
  return (
    <>
    <div className='d-flex flex-column p-3 mt-3'>
        <h2>Result</h2>
        <span>Total Questions : 10</span>
        <span>Score : {props.score * 5}/50</span>
        <span>Correct Answers : {props.score}</span>
        <span>Wrong Answers : {10 -props.score}</span>
        <div className='text-center'>
            <button className='btn btn-info' onClick={props.restart}>Play Again</button>
        </div>
    </div>
    </>
  )
}

export default Result