function Timer({ seconds }) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const isLow = seconds <= 60

  return (
    <div className={`timer${isLow ? ' timer-warning' : ''}`} aria-live="polite" aria-label={`${minutes} minutes and ${remainingSeconds} seconds remaining`}>
      <span className="timer-dot" aria-hidden="true" />
      {minutes}:{String(remainingSeconds).padStart(2, '0')}
    </div>
  )
}

export default Timer
