// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onEnterLetter = event => {
    this.setState({
      count: event.target.value,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <div>
              <label htmlFor="letter">Enter the phrase</label>
              <br />
              <input
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                className="entering-phrase"
                onChange={this.onEnterLetter}
                value={count}
              />
            </div>
            <br />
            <p className="count-card">No.of letters: {count.length}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
