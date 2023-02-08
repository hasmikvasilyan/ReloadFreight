import { Link } from 'react-router-dom'

function StoryItem({id,title,imgUrl,date}) {
  return (
    <li className='storyItem'>
      <Link to={`/success-stories/${id}`}> 
        <img src={imgUrl} alt="reload success story"/>
        <div className="storyContent">
        <h3 className='title'>{title}</h3>
        <p >{date}</p>
        </div>
      </Link>
    </li>
  )
}

export default StoryItem
