import aboutImg from "../../assets/img/png/aboutImgOne.png";
import AboutItem from "../../components/AboutItem";
import ReactPlayer from "react-player";
import aboutVideoBg from "../../assets/img/png/aboutVideoBg.png";
import { ReactComponent as PlayIcon } from "../../assets/img/svg/playIcon.svg";

const aboutData = [
  {
    id: 1,
    title: "About us",
    text: "Ever since Reload Freight’s establishment in 2009, we have been a top-quality provider of freight brokerage services. Our professionalism and work ethic has consistently demonstrated the agility and innovative spirit necessary to adapt to the ever-evolving logistics industry. As the #1 West Coast LandStar Agent, we have displayed the success of our customer-centric approach to our partners and portrayed the Diamond standard of logistics.With 30+ years of transportation & logistics experience and financial stability, we are still going strong, with 5 branches in different countries and many more to come.",
    img: aboutImg,
  },
  {
    id: 2,
    title: "What we do",
    text: "You can rely on Reload Freight to help you move freight quickly, securely, and cost-efficiently. Once you choose us, you've got someone who can do it all. Which means you can focus on growing your business. We provide safe, reliable transportation, logistics services, and transportation management solutions. Our highly trained and experienced agents are available 24/7 to instantly answer any questions and assist you with any kind of request.",
    img: aboutImg,
    order: "reverse",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="aboutHeading">
          <h2>
            Welcome to Reload Freight
            <span>The one and only Landstar agency in Armenia</span>
          </h2>
          <button className="btn btnFilled">Join the circle</button>
        </div>
        <div className="aboutDescriptionContainer">
          {aboutData.map((item) => (
            <AboutItem key={item.id} data={item} />
          ))}
        </div>

        <div id="landstar" className="abouPartnership">
          <h3 className="title">Landstar partnership</h3>
          <p className="text">
            Since its inception in 2009, Reload Freight has been a top quality provider of freight brokerage services,
            consistently demonstrating the agility and innovative spirit necessary to adapt to the ever-evolving
            logistics industry. As the #1 West Coast LandStar Agent, we have demonstrated the success of our
            customer-centric approach to our partners. 30+ years of transportation & logistics experience and financial
            stability.
          </p>
          <div className="playerWrapper">
            <ReactPlayer
              className="player"
              url="https://www.youtube.com/watch?v=OmibDVPx1qA"
              playIcon={<PlayIcon />}
              light={aboutVideoBg}
              width="100%"
              height="647px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
