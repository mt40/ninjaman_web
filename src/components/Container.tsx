import React, { ReactNode } from 'react'
import { isMobile } from '../util/Resource'

interface Props {
  isSmall?: boolean,
  isFluid?: boolean,
  children: ReactNode,
}

/** @see https://bulma.io/documentation/layout/container/ */
const Container: React.FC<Props> = (props) => {
  const size = props.isFluid ? 'is-fluid' : ''
  const innerSize = props.isSmall ? 'is-6' : 'is-10'

  const margin = isMobile() ? '10px' : ''

  return (
    <div className={ `Container container ${ size }` } style={ {margin: margin} }>
      <div className="columns">
        <div className={ `column ${ innerSize }` }>
          { props.children }
        </div>
      </div>
    </div>
  )
}

export default Container
