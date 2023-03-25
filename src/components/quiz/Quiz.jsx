import { useState, useEffect, useCallback, useNavigate } from 'react'
import QuizEndScreen from '../../pages/QuizEndScreen'
import { Container } from 'react-bootstrap'
import { quizQue } from '../../questionData/question'
import './quiz.css'

const QuizAttemptScreen = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const [timeLeft, setTimeLeft] = useState(10);

  const { questions } = quizQue
  const { question, choices, correctAnswer } = questions[activeQuestion] || {};

  const startCountdown = () => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);
    return interval;
  };

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
    setTimeLeft(10);
  }

  useEffect(() => {
    let interval;
    if (timeLeft > 0) {
      interval = startCountdown();
    } else if(!showResult){
      onClickNext();
      
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

  

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <Container fluid>
      {!showResult ? (
        <div className="quiz-container">
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>

            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
            </div>
            <div className="timer-section">
            Time Left: {timeLeft}
          </div>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? 'selected-answer' : null
                }>
                {answer}
              </li>
            ))}
          </ul>
          <div className="button">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <QuizEndScreen totalQuestion={questions.length} result={result} />
      )}
    </Container>
  )
}

export default QuizAttemptScreen;