import { Link } from 'react-router-dom'

function StoryItem({title,imgUrl,date}) {
  return (
    <li className='storyItem'>
                
            <img src={imgUrl} alt="" /> 
            <div className="storyContent">
                <h3 className='title'>{title}</h3>
                <p >{date}</p>
            </div> 
    </li>
  )
}

export default StoryItem