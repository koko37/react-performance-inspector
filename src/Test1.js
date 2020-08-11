import React, { useState } from 'react'
import Button from './components/Button'

import "./styles/test.css"

const functions = new Set()

export default () => {
  const [delta, setDelta] = useState(1)
  const [c, setC] = useState(0)
  const incrementDelta = () => setDelta(delta => delta + 1)
  const increment = () => setC(c => c + delta)
  // to check the counter of recreated buttons
  functions.add(incrementDelta)
  functions.add(increment)

  return (
    <div>
      <div className="container">
        <h1>Let's see how React re-creates components.</h1>
        <p>While clicking a button, it updates status variables C and Delta.</p>
        <p>And it should not re-create two functions.</p>
        <p>But now it re-creates, and functions counter is increasing, so it generates performance-issue</p>
        <div>Delta: {delta}</div>
        <div>C: {c}</div>

        <Button onClick={incrementDelta}>Increment Delta</Button>
        <Button onClick={increment}>Increment Counter</Button>

        <h3>Newly created functions: {functions.size}</h3>
      </div>
    </div>
  )
}
