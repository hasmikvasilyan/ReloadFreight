import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Story from '../../components/Story';
import story from '../../assets/img/png/story.png'
import Footer from '../home/Footer';
import  backIcon from '../../assets/img/svg/backIcon.svg'

const storiesData=[
  {
      id: 1,
      img:story,
      title: "2020 successes & improvements in office life",
      text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
      date: "2022-08-02T13:32"
  },
  {
      id: 2,
      img:story,
      title: "2020 successes & improvements in office life",
      text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
      date: "2022-08-02T13:32"
  }]

function StoryDetails() {
    const {storyId}=useParams();
    const navigate=useNavigate();
  return (
    <>
    <div className='storyBody'>
    <div className='container blog'>
        <button className="btn goBack" onClick={()=>navigate(-1)}> <img src={backIcon} alt="join realod freight" /> Join the circle</button>
        <Story 
            id={storiesData[0].id}
            img={storiesData[0].img}
            title={storiesData[0].title}
            text={storiesData[0].text}
            date={storiesData[0].date}    
            className="topStoryLink"   
        />
        <div className="smallerContainer">
            <p className="text">Working from home can be so much easier and more comfortable with the appropriate accessories in place. This said, remote work gadgets can help individuals reap the full benefits of working from home
Having a dedicated workspace with all the right tools is bound to keep individuals focused and remove any distractions. Even before most office employees started the remote life, 39% of team members had confirmed that having a dedicated desk, office, or meeting place was a leading factor in ensuring an enjoyable work environment.
Yet, every person deals with their own unique challenges when working from home. Some might have difficulties organizing their documents while others yearn for the comfort of their previous office chair. 
We’ve taken some of the most common issues employees might face along with more specific ones and found the best gadgets for remote workers.</p>
            <h3 className="title">Let’s get to them</h3>
            <p className="text">Items to boost the comfort of your home office
Ergonomic chair to prevent back pain
Sitting for 8 hours every day has serious implications for a person’s overall health. Back issues in particular are extra common and account for 264 million lost work days every year.

A comfortable and ergonomic chair can do wonders and switch an employee’s work-from-home experience for the better. When picking your next office chair, look for sturdy ones with high-quality cushions and lumbar support. Look for extra features like knee support or adjustable angles. No more slumping and the subsequent lower back pains that will leave your team feeling down for weeks.</p>
            <img src={story} alt="" className='storyImg' />
            <p className="text">Working from home can be so much easier and more comfortable with the appropriate accessories in place. This said, remote work gadgets can help individuals reap the full benefits of working from home
Having a dedicated workspace with all the right tools is bound to keep individuals focused and remove any distractions. Even before most office employees started the remote life, 39% of team members had confirmed that having a dedicated desk, office, or meeting place was a leading factor in ensuring an enjoyable work environment.
Yet, every person deals with their own unique challenges when working from home. Some might have difficulties organizing their documents while others yearn for the comfort of their previous office chair. 
We’ve taken some of the most common issues employees might face along with more specific ones and found the best gadgets for remote workers.</p>

        </div> 
        <div className='storiesContainer'>
                {storiesData.map(story=>(
                    <Story 
                        key={story.id}
                        id={story.id}
                        img={story.img}
                        title={story.title}
                        date={story.date}                        
                    />
                ))}
            </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default StoryDetails