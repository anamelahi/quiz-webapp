import React from 'react'
import "../App.css"
const Question = (props) => {
  return (
    <div className='questionBlock'>
        <p>{JSON.stringify(props.data, null, 2)}</p>
    </div>
  )
}

export default Question