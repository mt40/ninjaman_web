import React, { ReactNode } from 'react'

interface Props {
  isSmall?: boolean,
  isFluid?: boolean,
  children: ReactNode,
}

/** @see https://bulma.io/documentation/layout/container/ */
const Container: React.FC<Props> = (props) => {
  const size = props.isFluid ? 'is-fluid' : ''
  const innerSize = props.isSmall ? 'is-6' : 'is-10'

  return (
    <div className={ `Container container ${ size }` }>
      <div className="columns">
        <div className={ `column ${ innerSize }` }>
          { props.children }
        </div>
      </div>
    </div>
  )
}

export default Container
