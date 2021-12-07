import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {countText: 'Count is Even', count: 0}

  validate = () => {
    const {count} = this.state
    const value = Math.floor(Math.random() * 100) + count
    console.log(value)

    if (value % 2 === 0) {
      this.setState(() => ({countText: 'Count is Even', count: value}))
    } else {
      this.setState(() => ({countText: 'Count is Odd', count: value}))
    }
  }

  render() {
    const {countText, count} = this.state
    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="head2">{countText}</p>
          <div>
            <button type="submit" onClick={this.validate}>
              Increment
            </button>
          </div>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
