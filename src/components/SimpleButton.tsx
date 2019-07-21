import React, { CSSProperties, DOMAttributes, HTMLAttributes } from 'react'
import './SimpleButton.css'

interface SimpleButtonProps extends HTMLAttributes<HTMLElement> {
  text: string,
  lightColor?: boolean,
  href?: string,
}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  const {text, lightColor, onClick, ...others} = props
  const colorClass = lightColor ? 'has-text-white-ter' : ''

  return (
    <div onClick={ onClick }>
      <a className={ `SimpleButton button no_bg ${ colorClass }` }
         { ...others }>
        { text }
      </a>
    </div>
  )
}

export default SimpleButton
