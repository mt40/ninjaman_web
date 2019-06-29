import React from 'react'

interface Props {
  className?: string
}

const SearchBox: React.FC<Props> = (props) => {
  return (
    <div className={`SearchBox columns is-centered ${props.className}`}>
      <div className="column is-4">
        <div className="field">
          <p className="control is-expanded">
            <input className="input" type="text" placeholder="Search for a service"/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
