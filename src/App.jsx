import { useEffect, useRef, useState } from 'react'
import './App.css'
import questions from './data/questions.js'
import Welcome from './components/Welcome.jsx'
import Quiz from './components/Quiz.jsx'
import Result from './components/Result.jsx'
import ReviewAnswers from './components/ReviewAnswers.jsx'

const QUIZ_DURATION = 10 * 60

function calculateScore(answers) {
  return questions.reduce(
    (total, question, index) => total + (answers[index] === question.correctAnswer ? 1 : 0),
    0,
  )
}

function App() {
  const [page, setPage] = useState('welcome')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const selectedAnswersRef = useRef({})
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (page !== 'quiz') return undefined

    const timeoutId = window.setTimeout(() => {
      if (timeLeft <= 1) {
        setTimeLeft(0)
        setScore(calculateScore(selectedAnswersRef.current))
        setPage('result')
      } else {
        setTimeLeft(timeLeft - 1)
      }
    }, 1000)

    return () => window.clearTimeout(timeoutId)
  }, [page, timeLeft])

  function startQuiz() {
    setCurrentIndex(0)
    setSelectedAnswers({})
    selectedAnswersRef.current = {}
    setTimeLeft(QUIZ_DURATION)
    setScore(0)
    setPage('quiz')
  }

  function finishQuiz() {
    setScore(calculateScore(selectedAnswers))
    setPage('result')
  }

  function selectAnswer(answer) {
    const updatedAnswers = { ...selectedAnswersRef.current, [currentIndex]: answer }
    selectedAnswersRef.current = updatedAnswers
    setSelectedAnswers(updatedAnswers)
  }

  const currentQuestion = questions[currentIndex]

  return (
    <div className="app-shell">
      {page === 'welcome' && (
        <Welcome questionCount={questions.length} duration={QUIZ_DURATION / 60} onStart={startQuiz} />
      )}
      {page === 'quiz' && (
        <Quiz
          question={currentQuestion}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswers[currentIndex]}
          selectedAnswers={selectedAnswers}
          timeLeft={timeLeft}
          onSelect={selectAnswer}
          onPrevious={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
          onNext={() => setCurrentIndex((index) => Math.min(index + 1, questions.length - 1))}
          onSubmit={finishQuiz}
        />
      )}
      {page === 'result' && (
        <Result
          questions={questions}
          selectedAnswers={selectedAnswers}
          score={score}
          onReview={() => setPage('review')}
          onRetake={startQuiz}
        />
      )}
      {page === 'review' && (
        <ReviewAnswers
          questions={questions}
          selectedAnswers={selectedAnswers}
          onBack={() => setPage('result')}
          onRetake={startQuiz}
        />
      )}
    </div>
  )
}

export default App
