import React from 'react'
import '../header/SearchHeader.css';

function SearchHeader(props) {

  return (
    <div className='headerBar'>
        <div className='searchBar'>
            <input type="text" placeholder="Search Movie..." onChange={props.typingStart}/>
        </div>
    </div>
  )
}

export default SearchHeader