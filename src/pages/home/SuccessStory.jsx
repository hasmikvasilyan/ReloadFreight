import SuccessItem from "./SuccessItem";
import employeeIcon from "../../assets/img/svg/employeeIcon.svg";
import employeeWhiteIcon from "../../assets/img/svg/employeeWhiteIcon.svg";
import growth2018 from "../../assets/img/svg/growth2018.svg";
import growth2019 from "../../assets/img/svg/growth2019.svg";
import growth2020 from "../../assets/img/svg/growth2020.svg";
import growthFuture from "../../assets/img/svg/growthFuture.svg";
import moneyIcon from "../../assets/img/svg/moneyIcon.svg";
import coffeeIcon from "../../assets/img/svg/coffeeIcon.svg";
import funIcon from "../../assets/img/svg/funIcon.svg";
import commissionIcon from "../../assets/img/svg/commissionIcon.svg";
import growthIcon from "../../assets/img/svg/growthIcon.svg";
import calendarIcon from "../../assets/img/svg/calendarIcon.svg";

import perkImgOne from "../../assets/img/png/aboutImgOne.png";
import {useNavigate} from 'react-router-dom'
import StoryItem from "./StoryItem";
import { Link } from 'react-router-dom'


const valuesData = [
  {
    id: 1,
    name: "Teamwork",
  },
  {
    id: 2,
    name: "Integrity",
  },
  {
    id: 3,
    name: "Passion",
  },
  {
    id: 4,
    name: "Innovation",
  },
];
const successData = [
  {
    year: 2018,
    employee: 3,
    area: 20,
    imgSrc: growth2018,
    icon: employeeIcon,
  },
  {
    year: 2019,
    employee: 40,
    area: 76,
    imgSrc: growth2019,
    icon: employeeIcon,
  },
  {
    year: 2020,
    employee: 80,
    area: 400,
    imgSrc: growth2020,
    icon: employeeIcon,
  },
  {
    year: "Future",
    employee: 300,
    area: 2000,
    imgSrc: growthFuture,
    icon: employeeWhiteIcon,
  },
];
const perksData = [
  {
    id: 1,
    name: "High salary",
    icon: moneyIcon,
  },
  {
    id: 2,
    name: "Fun team activities",
    icon: funIcon,
  },
  {
    id: 3,
    name: "Uncapped commission",
    icon: commissionIcon,
  },
  {
    id: 4,
    name: "Free coffee",
    icon: coffeeIcon,
  },
  {
    id: 5,
    name: "Unlimited growth oppotunity",
    icon: growthIcon,
  },
  {
    id: 6,
    name: "Convenient working schedule for students (4pm-2am)",
    icon: calendarIcon,
  },
];
// const storyData = [
//   {
//     id: 1,
//     title: "The first rebranding",
//     imgUrl: storyOne,
//     date: "07.06.2022",
//   },
//   {
//     id: 2,
//     title: "Team Captains",
//     imgUrl: storyTwo,
//     date: "24.06.2022",
//   },
//   {
//     id: 3,
//     title: "Coologistics",
//     imgUrl: storyThree,
//     date: "17.07.2022",
//   },
//   {
//     id: 4,
//     title: "500k",
//     imgUrl: storyOne,
//     date: "07.06.2022",
//   },
//   {
//     id: 5,
//     title: "1 million",
//     imgUrl: storyTwo,
//     date: "24.06.2022",
//   },
//   {
//     id: 6,
//     title: "New rebranding",
//     imgUrl: storyThree,
//     date: "17.07.2022",
//   },
//   {
//     id: 7,
//     title: "Landstar fortune 500",
//     imgUrl: storyOne,
//     date: "07.06.2022",
//   },
//   {
//     id: 8,
//     title: "Tbilisi Office",
//     imgUrl: storyTwo,
//     date: "24.06.2022",
//   },
//   {
//     id: 9,
//     title: "Lebanon Office",
//     imgUrl: storyThree,
//     date: "17.07.2022",
//   },
// ];
function SuccessStory({storyData}) {
  // const formattedDate = new Date(date);
  // const [day,month,year]= [formattedDate.getDate(),formattedDate.toLocaleString('en-us', { month: 'short' }), formattedDate.getFullYear()];
  
  const navigate=useNavigate();
  return (
    <section className="successStoryContainer">
      <div className="container">
        <h3 className="title">Our values</h3>
        <ul className="valuesWrapper">
          {valuesData.map((value) => (
            <li key={value.id}>{value.name}</li>
          ))}
        </ul>
        <div id="success">
          <h3 className="title">Our success story</h3>
          <ul className="successWrapper">
            {successData.map((item) => (
              <SuccessItem key={item.year} info={item} employeeIcon={item.icon} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title">Perks & benefits</h3>
          <div className="perksWrapper">
            <ul className="perksList">
              {perksData.map((perk) => (
                <li key={perk.id}>
                  <img src={perk.icon} alt="reload perk" />
                  {perk.name}
                </li>
              ))}
            </ul>
            <ul className="perksGallery">
              <li>
                <img src={perkImgOne} alt="reload freight perks" />
              </li>
              <li>
                <img src={perkImgOne} alt="reload freight perks" />
              </li>
              <li>
                <img src={perkImgOne} alt="reload freight perks" />
              </li>
            </ul>
          </div>
        </div>
        <div className="successContainer">
          <div className="titleWrapper">
            <h3 className="title">Success stories</h3>
            <button className="btn btnFilled" onClick={() => navigate('/success-stories')}>See All</button>
          </div>
          <ul className="storyWrapper">
            {storyData.slice(0,3).map((data) => (
              <Link key={data.id} to={`/success-stories/${data.id}`} className="storyLink"> 
                <StoryItem id={data.id} title={data.title} imgUrl={data.imgUrl} date={data.date} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SuccessStory;
