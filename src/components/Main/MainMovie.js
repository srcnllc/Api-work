import React from 'react'
import '../Main/MainMovie.css';


function MainMovie(props) {
  return (
    <div className='content'>
      <div className='mainbox'>
        {props.movieData.map(item =>{
          return(
            <div key={item.id} className='box'>
            <img src={`https://picsum.photos/id/${item.id+60}/200/300`} alt={`${item.id}`}/>
            <div className='movieInfo'>{item.title}</div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainMovie