import React from 'react'

function TopTitle({text,boldText}) {
  return (
    <h1 className="topTitle">{text} <span className='bold'>{boldText}</span> </h1>
  )
}

export default TopTitle