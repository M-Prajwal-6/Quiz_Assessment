function Welcome({ questionCount, duration, onStart }) {
  return (
    <main className="welcome page-shell">
      <div className="welcome-mark" aria-hidden="true">Q</div>
      <p className="eyebrow">A little knowledge goes a long way</p>
      <h1>Quiz and<br />Assessment App</h1>
      <p className="intro">Take a quick mixed-topic quiz, see how you did, and review every answer.</p>
      <div className="quiz-facts">
        <div><strong>{questionCount}</strong><span>questions</span></div>
        <div><strong>{duration}</strong><span>minutes</span></div>
      </div>
      <button className="button button-primary start-button" onClick={onStart}>
        Start quiz <span aria-hidden="true">→</span>
      </button>
      <p className="welcome-note">General knowledge · Computer science · JavaScript</p>
    </main>
  )
}

export default Welcome
