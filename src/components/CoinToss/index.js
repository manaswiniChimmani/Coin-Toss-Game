// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, r: 0}

  tossCoin = () => {
    const {total, heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        r: tossResult,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        r: tossResult,
      }))
    }
  }

  render() {
    const {total, heads, tails, r} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="h1">Coin Toss Game</h1>
          <p className="p1">Heads (or) Tails</p>
          {r === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="img"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="img"
              alt="toss result"
            />
          )}

          <button className="btn" onClick={this.tossCoin} type="button">
            Toss Coin
          </button>
          <div className="c">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
