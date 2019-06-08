import React from 'react'
import './SimpleButton.css'

interface SimpleButtonProps {
  text: string
}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  return (
    // todo: href
    <a className="SimpleButton button" href="/">{props.text}</a>
  )
}

export default SimpleButton
