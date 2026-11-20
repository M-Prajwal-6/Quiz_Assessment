import Question from './Question.jsx'
import Timer from './Timer.jsx'

function Quiz({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  selectedAnswers,
  timeLeft,
  onSelect,
  onPrevious,
  onNext,
  onSubmit,
}) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100
  const answeredCount = Object.values(selectedAnswers).filter(Boolean).length
  const isLastQuestion = currentIndex === totalQuestions - 1

  return (
    <main className="quiz-page page-shell">
      <header className="quiz-header">
        <span className="brand" aria-label="Quiz and Assessment App">Q<span>.</span></span>
        <div className="quiz-meta">
          <span className="question-count">Question {currentIndex + 1} <span>of {totalQuestions}</span></span>
          <Timer seconds={timeLeft} />
        </div>
      </header>
      <div className="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax={totalQuestions} aria-valuenow={currentIndex + 1}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <Question
        question={question}
        questionNumber={currentIndex + 1}
        selectedAnswer={selectedAnswer}
        onSelect={onSelect}
      />
      <footer className="quiz-footer">
        <span className="answered-count">{answeredCount} of {totalQuestions} answered</span>
        <div className="quiz-actions">
          <button className="button button-secondary" onClick={onPrevious} disabled={currentIndex === 0}>
            ← <span>Previous</span>
          </button>
          {isLastQuestion ? (
            <button className="button button-primary" onClick={onSubmit}>Finish quiz <span aria-hidden="true">✓</span></button>
          ) : (
            <button className="button button-primary" onClick={onNext}>Next question <span aria-hidden="true">→</span></button>
          )}
        </div>
      </footer>
    </main>
  )
}

export default Quiz
