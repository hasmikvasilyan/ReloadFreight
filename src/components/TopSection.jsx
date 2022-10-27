import React from 'react'
import TopTitle from './TopTitle'

function TopSection({text,boldText}) {
  return (
    <div className='topSection'>
        <div className="container"> 
            <TopTitle text={text} boldText={boldText}/>
        </div>        
    </div>
  )
}

export default TopSection