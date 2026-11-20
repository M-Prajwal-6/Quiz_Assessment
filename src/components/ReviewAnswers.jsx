function ReviewAnswers({ questions, selectedAnswers, onBack, onRetake }) {
  return (
    <main className="review-page page-shell">
      <header className="review-header">
        <div>
          <p className="eyebrow">Your results</p>
          <h1>Answer review</h1>
        </div>
        <button className="button button-secondary" onClick={onBack}>← Results</button>
      </header>
      <div className="review-list">
        {questions.map((question, index) => {
          const answer = selectedAnswers[index]
          const isCorrect = answer === question.correctAnswer
          return (
            <article className={`review-item${isCorrect ? ' review-correct' : ''}`} key={question.id}>
              <div className="review-item-heading">
                <span>Question {index + 1}</span>
                <strong>{isCorrect ? 'Correct' : answer ? 'Incorrect' : 'Unanswered'}</strong>
              </div>
              <h2>{question.question}</h2>
              <p>Your answer: <span>{answer || 'No answer selected'}</span></p>
              <p>Correct answer: <span>{question.correctAnswer}</span></p>
            </article>
          )
        })}
      </div>
      <button className="button button-primary review-retake" onClick={onRetake}>Retake quiz <span aria-hidden="true">↻</span></button>
    </main>
  )
}

export default ReviewAnswers
