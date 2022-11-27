import Story from '../../components/Story'
import TopSection from '../../components/TopSection'
import story from '../../assets/img/png/story.png'
import Footer from '../home/Footer'

const storiesData=[
    {
        id: 1,
        img:story,
        title: "2020 successes & improvements in office lifeee",
        text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
        date: "2022-08-02T13:32",
        top:true,
    },
    {
        id: 2,
        img:story,
        title: "5 #MustRead Books for sales agents",
        text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
        date: "2022-08-02T13:32",
        top:false,
    },
    {
        id: 3,
        img:story,
        title: "5 #MustRead Books for sales agents",
        text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
        date: "2022-08-02T13:32",
        top:false,
    },
    {
        id: 4,
        img:story,
        title: "5 #MustRead Books for sales agents",
        text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
        date: "2022-08-02T13:32",
        top:false,
    },
    {
        id: 5,
        img:story,
        title: "5 #MustRead Books for sales agents",
        text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
        date: "2022-08-02T13:32",
        top:false,
    },

]
function Stories() {
    const [topStory]=storiesData.filter(data=>data.top)
    
  return (
    <>
        <TopSection text={"Success"} boldText={"Stories"}/>   
        <div className="storyBody">     
            <div className="container">
                <Story 
                    id={topStory.id}
                    img={topStory.img}
                    title={topStory.title}
                    text={topStory.text}
                    date={topStory.date}
                    className="topStoryLink"                        
                />
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

export default Stories