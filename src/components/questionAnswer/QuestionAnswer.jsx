import React, { useState } from 'react'
import arrowDown from '../../assets/img/arrowDown.png'
import arrowRight from '../../assets/img/arrowRight.png'
import './QuestionAnswer.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function QuestionAnswer({ question, answer }) {
    let [showAnswer,setShowAnswer] = useState(false);

    const handleQuestion = () => {
        setShowAnswer(!showAnswer)
    }
  return (
    <div className="questionAnswerBox">
        <div className="questionBox" onClick={handleQuestion}>
            <p>{question}</p>
            {showAnswer ? <ArrowDownwardIcon /> : <ArrowForwardIcon />}
        </div>
        {showAnswer && <div className="answerBox">
            <p>{answer}</p>
        </div>}
    </div>
  )
}
