import SuccessItem from './SuccessItem';
import employeeIcon from '../../assets/img/svg/employeeIcon.svg';
import employeeWhiteIcon from '../../assets/img/svg/employeeWhiteIcon.svg';
import growth2018 from '../../assets/img/svg/growth2018.svg';
import growth2019 from '../../assets/img/svg/growth2019.svg';
import growth2020 from '../../assets/img/svg/growth2020.svg';
import growthFuture from '../../assets/img/svg/growthFuture.svg';
import moneyIcon from '../../assets/img/svg/moneyIcon.svg';
import coffeeIcon from '../../assets/img/svg/coffeeIcon.svg';
import funIcon from '../../assets/img/svg/funIcon.svg';
import commissionIcon from '../../assets/img/svg/commissionIcon.svg';
import growthIcon from '../../assets/img/svg/growthIcon.svg';
import calendarIcon from '../../assets/img/svg/calendarIcon.svg';
import storyOne from '../../assets/img/png/storyOne.png';
import storyTwo from '../../assets/img/png/storyTwo.png';
import storyThree from '../../assets/img/png/storyThree.png';
import perkImgOne from '../../assets/img/png/aboutImgOne.png';

import StoryItem from './StoryItem';


const valuesData=[
    {
        id:1,
        name:"Teamwork"
    },
    {
        id:2,
        name:"Integrity"
    },
    {
        id:3,
        name:"Passion"
    },
    {
        id:4,
        name:"Innovation"
    },
];
const successData=[
    {
        year:2018,
        employee:3,
        area:20,
        imgSrc: growth2018,
        
    },
    {
        year:2019,
        employee:40,
        area:76,
        imgSrc: growth2019,
    },
    {
        year:2020,
        employee:80,
        area:400,
        imgSrc: growth2020,
    },
    {
        year:"Future",
        employee:300,
        area:2000,
        imgSrc: growthFuture,
    },
];
const perksData=[
    {
        id:1,
        name:"High salary",
        icon:moneyIcon
    },
    {
        id:2,
        name:"Fun team activities",
        icon: funIcon
    },
    {
        id:3,
        name:"Uncapped commission",
        icon: commissionIcon
    },
    {
        id:4,
        name:"Free coffee",
        icon: coffeeIcon
    },
    {
        id:5,
        name:"Unlimited growth oppotunity",
        icon: growthIcon
    },
    {
        id:6,
        name:"Convenient working schedule for students (4pm-2am)",
        icon: calendarIcon
    },
];
const storyData=[
    {
        id:1,
        title: 'Headline of the first success story',
        imgUrl:storyOne,
        date: '07.06.2022'
    },
    {
        id:2,
        title: 'Headline of the first success story',
        imgUrl:storyTwo,
        date: '24.06.2022'
    },
    {
        id:3,
        title: 'Headline of the first success story',
        imgUrl:storyThree,
        date: '17.07.2022'
    },
]
function SuccessStory() {
  return (
    <section id="successStory">
        <div className="container">
            <h3 className="title">Our values</h3>
            <ul className="valuesWrapper">
                {
                    valuesData.map(value=>(
                        <li key={value.id}>{value.name}</li>
                    ))
                }
            </ul>
            <h3 className="title">Our success story</h3>
            <ul className="successWrapper">
                {
                    successData.map(item=>(
                        <SuccessItem
                        key= {item.year}
                        info={item} 
                        employeeIcon={employeeIcon} />
                    ))
                }
            </ul>
            <h3 className="title">Perks & benefits</h3>
            <div className="perksWrapper">
                <ul className="perksList">
                    {perksData.map(perk=>(
                        <li key={perk.id}><img src={perk.icon} alt="reload perk" />{perk.name}</li>
                    ))}
                </ul>
                <ul className="perksGallery">
                    <li><img src={perkImgOne} alt="reload freight perks" /></li>
                    <li><img src={perkImgOne} alt="reload freight perks" /></li>
                    <li><img src={perkImgOne} alt="reload freight perks" /></li>
                </ul>
            </div>
            <div className="successContainer">
                <div className="titleWrapper">
                    <h3 className="title">Success stories</h3>
                    <button className="btn btnFilled">See All</button>
                </div>
                <ul className="storyWrapper">
                    {
                       storyData.map(data=><StoryItem 
                        key={data.id}
                        title={data.title}
                        imgUrl={data.imgUrl}
                        date={data.date}
                        />) 
                    }
                </ul>
            </div>
            
        </div>
    </section>    
  )
}

export default SuccessStory