
import {Link} from 'react-router-dom';

function Story({id,img,title,text,date,className}) {   

  const formattedDate = new Date(date);
  const [day,month,year]= [formattedDate.getDate(),formattedDate.toLocaleString('en-us', { month: 'long' }), formattedDate.getFullYear()];
       
  return (
    <div className="storyContainer">
      <Link to={`/success-stories/${id}`} className={`storyLink ${className||""}`}> 
        <img src={img} alt="reload success story"/>
        <div className="storyAbout">
            <h4 className="storyTitle">{title}</h4>
            {text && <p className="storyText text">2020 successes & improvements in office life</p>}            
            <p className="storyDate">{month} {day}<span className="storyYear">{year}</span></p>
        </div>
      </Link>
    </div>
  )
}

export default Story