import React from 'react'

const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

export default (props) => {
  return (
    <button onClick={props.onClick} style={{background: randomColour()}}>{props.children}</button>
  )
}
