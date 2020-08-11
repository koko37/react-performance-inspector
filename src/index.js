import React from 'react'
import { render } from 'react-dom'
import Test1 from './Test1'
import Test2 from './Test2'

render((
  <div>
    <Test1 />
    <Test2 />
  </div>
), document.getElementById('root'))
