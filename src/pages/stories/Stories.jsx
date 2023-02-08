import { useNavigate } from 'react-router-dom'
import Story from '../../components/Story'
import TopSection from '../../components/TopSection'
// import story from '../../assets/img/png/story.png'

// const storiesData=[
//     {
//         id: 1,
//         img:story,
//         title: "2020 successes & improvements in office life",
//         text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
//         date: "2022-08-02T13:32"
//     },
//     {
//         id: 2,
//         img:story,
//         title: "2020 successes & improvements in office life",
//         text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
//         date: "2022-08-02T13:32"
//     },
//     {
//         id: 3,
//         img:story,
//         title: "2020 successes & improvements in office life",
//         text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
//         date: "2022-08-02T13:32"
//     },
//     {
//         id: 4,
//         img:story,
//         title: "2020 successes & improvements in office life",
//         text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
//         date: "2022-08-02T13:32"
//     },
//     {
//         id: 5,
//         img:story,
//         title: "2020 successes & improvements in office life",
//         text: "With 2021 just around the corner, our Reload Freight vision has become clearer than ever!...",
//         date: "2022-08-02T13:32"
//     },

// ]
function Stories({storyData}) {
    
    
  return (
    <>
        <TopSection text={"Success"} boldText={"Stories"}/>        
        <div className="container">
                <div className='storiesContainer'>
                    {storyData.map(story=>(
                        <Story 
                            key={story.id}
                            id={story.id}
                            imgUrl={story.imgUrl}
                            title={story.title}
                            date={story.date}                        
                        />
                    ))}
                </div>
        </div>
    </>
  )
}

export default Stories