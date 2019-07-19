import React, { CSSProperties, DOMAttributes, HTMLAttributes } from 'react'
import './SimpleButton.css'

interface SimpleButtonProps extends HTMLAttributes<HTMLElement> {
  text: string,
  lightColor?: boolean
}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  const {text, lightColor, ...others} = props
  const colorClass = lightColor ? 'has-text-white-ter' : ''

  return (
    // todo: href
    <a className={ `SimpleButton button no_bg ${ colorClass }` }
       { ...others }>
      { text }
    </a>
  )
}

export default SimpleButton
