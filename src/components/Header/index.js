import './index.css'

const Header = props => {
  const {count, score} = props
  return (
    <div className="bg-card1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="bg-card2">
        <div className="bg-score">
          <p>Score</p>
          <p>{score}</p>
        </div>
        <div className="bg-timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="">{count} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Header
