import './index.css'

const GameOver = props => {
  const {score, startGame} = props
  const resetGame = () => {
    startGame()
  }
  return (
    <div className="bg-game-over">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p>Your Score</p>
      <p>{score}</p>
      <button className="button" type="button" onClick={resetGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        <p>Play Again</p>
      </button>
    </div>
  )
}

export default GameOver
