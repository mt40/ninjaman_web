import React, {ReactNode} from 'react'

interface Props {
  isSmall?: boolean,
  children: ReactNode,
}

const Container: React.FC<Props> = (props) => {
  const size = props.isSmall ? "is-6" : "is-10"

  return (
    <div className="Container container">
      <div className="columns">
        <div className={`column ${size}`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Container
