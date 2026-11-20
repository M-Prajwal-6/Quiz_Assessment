function Result({ questions, selectedAnswers, score, onReview, onRetake }) {
  const incorrectCount = Object.entries(selectedAnswers).filter(([index, answer]) => answer && answer !== questions[index].correctAnswer).length
  const unansweredCount = questions.length - Object.keys(selectedAnswers).length
  const percentage = Math.round((score / questions.length) * 100)
  const message = percentage === 100
    ? 'A perfect score. Brilliant work.'
    : percentage >= 70
      ? 'Great work. You know your stuff.'
      : percentage >= 40
        ? 'Good effort. There is more to discover.'
        : 'A good start. Try again and see what sticks.'

  return (
    <main className="result-page page-shell">
      <p className="eyebrow">Quiz complete</p>
      <div className="score-ring" aria-label={`Score ${percentage} percent`}>
        <strong>{percentage}%</strong>
        <span>score</span>
      </div>
      <h1>{message}</h1>
      <p className="result-summary">You got {score} out of {questions.length} questions correct.</p>
      <div className="result-stats">
        <div><strong>{score}</strong><span>Correct</span></div>
        <div><strong>{incorrectCount}</strong><span>Incorrect</span></div>
        <div><strong>{unansweredCount}</strong><span>Unanswered</span></div>
      </div>
      <div className="result-actions">
        <button className="button button-primary" onClick={onReview}>Review answers <span aria-hidden="true">→</span></button>
        <button className="button button-secondary" onClick={onRetake}>Retake quiz <span aria-hidden="true">↻</span></button>
      </div>
    </main>
  )
}

export default Result
