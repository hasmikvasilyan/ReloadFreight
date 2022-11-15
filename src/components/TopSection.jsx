import React from 'react'
import TopTitle from './TopTitle'
import Header from './Header'

function TopSection({text,boldText}) {
  return (
    <div className='topSection'>
        <div className="container"> 
            <Header/>
            <TopTitle text={text} boldText={boldText}/>
        </div>        
    </div>
  )
}

export default TopSection