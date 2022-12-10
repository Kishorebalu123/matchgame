import './index.css'

const Header = props => {
  const {count, score} = props
  return (
    <>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </li>
      <li>
        <div className="bg-card2">
          <div className="bg-score">
            <p>Score:</p>
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
      </li>
    </>
  )
}

export default Header
