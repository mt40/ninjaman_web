import React from 'react'
import './SimpleButton.css'

interface SimpleButtonProps {
  text: string,
  lightColor?: boolean
}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  const colorClass = props.lightColor ? 'has-text-white-ter' : ''

  return (
    // todo: href
    <a className={`SimpleButton button no_bg ${colorClass}`} href="/">{props.text}</a>
  )
}

export default SimpleButton
