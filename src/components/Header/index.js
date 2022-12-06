import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
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
            <p>0</p>
          </div>
          <div className="bg-timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            <p className="">60</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
