import React from 'react'

const Container: React.FC = ({children}) => {
  return (
    <div className="Container container">
      {children}
    </div>
  )
}

export default Container
