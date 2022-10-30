import Footer from '../home/Footer';
import photo from "../../assets/img/png/photo.png";
import './partner.css'

import PartnerItem from "./PartnerItem";
import TopSection from '../../components/TopSection';
const partnersData=[
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
    {
        id:1,
        name: "Name",
        position: "Sales Agent",
        team:"Yellow team",
        img: photo,
    },
]
function Partners() {
  return (
    <>
        <TopSection text={"Meet our"} boldText={"Partners"}/>
        <section className="partnersContainer">
            <div className="container">
                <div className="partnersHeading">
                    <div>
                        <h3 className="title">Meet our partners</h3>
                        <p className="text">
                            Be a part of a young, fun & enthusiastic team of ninjas, who believe that positive atmosphere and corporate culture ensure the best team results
                        </p>                    
                    </div>
                    <button className="btn btnFilled">Join the circle</button>
                </div>
                <ul className="partnersList">
                    {partnersData.map(partner=><PartnerItem key={partner.id} id={partner.id} partner={partner}/>)}
                </ul>
                
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Partners