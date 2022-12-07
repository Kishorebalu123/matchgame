const GameOver = props => {
  const {score} = props
  return (
    <div className="game-over">
      <img src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png" />
      <p>Your Score</p>
      <p>{score}</p>
    </div>
  )
}

export default GameOver
