function Question({ question, questionNumber, selectedAnswer, onSelect }) {
  return (
    <section className="question-panel" aria-labelledby="question-title">
      <p className="question-kicker">Question {questionNumber}</p>
      <h2 id="question-title">{question.question}</h2>
      <div className="options-list">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option
          return (
            <button
              className={`option${isSelected ? ' option-selected' : ''}`}
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(option)}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span>{option}</span>
              {isSelected && <span className="option-check" aria-hidden="true">✓</span>}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Question
