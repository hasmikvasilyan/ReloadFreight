import aboutImg from "../../assets/img/png/aboutImgOne.png";
import AboutItem from "../../components/AboutItem";
import ReactPlayer from "react-player";
import aboutVideoBg from "../../assets/img/png/aboutVideoBg.png";

const aboutData = [
  {
    id: 1,
    title: "About us",
    text: "Since its inception in 2009, Reload Freight has been a top quality provider of freight brokerage services, consistently demonstrating the agility and innovative spirit necessary to adapt to the ever-evolving logistics industry. As the #1 West Coast LandStar Agent, we have demonstrated the success of our customer-centric approach to our partners. 30+ years of transportation & logistics experience and financial stability.",
    img: aboutImg,
  },
  {
    id: 2,
    title: "What we do",
    text: "Since its inception in 2009, Reload Freight has been a top quality provider of freight brokerage services, consistently demonstrating the agility and innovative spirit necessary to adapt to the ever-evolving logistics industry. As the #1 West Coast LandStar Agent, we have demonstrated the success of our customer-centric approach to our partners. 30+ years of transportation & logistics experience and financial stability.",
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
