import { Link } from 'react-router-dom'

function StoryItem({title,imgUrl,date}) {
  return (
    <li className='storyItem'>
        {/* <Link to={`/category/${listing.type}/${id}`} className="storyLink"> */} 
            <img src={imgUrl} alt="" /> 
            <div className="storyContent">
                <h3 className='title'>{title}</h3>
                <p >{date}</p>
            </div>
            
        {/* </Link> */}
    </li>
  )
}

export default StoryItem