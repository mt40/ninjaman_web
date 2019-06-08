import React from 'react'

const Container: React.FC = ({children}) => {
  return (
    <div className="Container container">
      <div className="columns">
        <div className="column is-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container
