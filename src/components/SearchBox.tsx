import React from 'react'

const SearchBox: React.FC = () => {
  return (
    <div className="SearchBox columns is-centered">
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
