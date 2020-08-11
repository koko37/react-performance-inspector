import React, { useState, useCallback } from 'react'
import Button from './components/Button'

import "./styles/test.css"

const functions2 = new Set()

export default () => {
  const [delta2, setDelta2] = useState(1)
  const [c2, setC2] = useState(0)
  const incrementDelta2 = useCallback(() => setDelta2(delta2 => delta2 + 1), [])
  const increment2 = useCallback(() => setC2(c2 => c2 + delta2), [delta2])
  // to check the counter of recreated buttons
  functions2.add(incrementDelta2)
  functions2.add(increment2)

  return (
    <div>
      <div className="container">
        <h3>useCallback() only updates cache if dependency is updated.</h3>
        <p>So it does not re-create increment2() unless delta2 is updated.</p>
        <p>Please check repository source code with care.</p>
        <div>Delta2: {delta2}</div>
        <div>C2: {c2}</div>

        <Button onClick={incrementDelta2}>Increment Delta</Button>
        <Button onClick={increment2}>Increment Counter</Button>

        <h3>Newly created functions: {functions2.size}</h3>
      </div>
    </div>  
  )
}
