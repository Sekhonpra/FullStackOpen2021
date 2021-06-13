import React, { useState } from 'react'

const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  const allClicks = props.good + props.neutral + props.bad
  const average = props.good - props.bad
  const positivePercentage = props.good/allClicks
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{allClicks}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Positive Percentage</td>
            <td>{positivePercentage} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App