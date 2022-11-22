import employeesIcon from "../../assets/img/svg/employeesIcon.svg";
import milesIcon from "../../assets/img/svg/milesIcon.svg";
import shipmentsIcon from "../../assets/img/svg/shipmentsIcon.svg";
import mcnumbersIcon from "../../assets/img/svg/mcnumbersIcon.svg";
import trucksIcon from "../../assets/img/svg/trucksIcon.svg";
// import playIcon from '../../assets/img/svg/playIcon.svg';
import statsVideoBg from "../../assets/img/png/statsVideoBg.png";
import { ReactComponent as PlayIcon } from "../../assets/img/svg/playIcon.svg";
import ReactPlayer from "react-player";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const statsData = [
  {
    id: 1,
    name: "Employees",
    value: numberWithCommas(80),
    iconUrl: employeesIcon,
  },
  {
    id: 2,
    name: "Miles",
    value: numberWithCommas(3258740),
    iconUrl: milesIcon,
  },
  {
    id: 3,
    name: "Shipments",
    value: numberWithCommas(150000),
    iconUrl: shipmentsIcon,
  },
  {
    id: 4,
    name: "MCnumbers",
    value: numberWithCommas(100),
    iconUrl: mcnumbersIcon,
  },
  {
    id: 5,
    name: "Trucks",
    value: numberWithCommas(1000),
    iconUrl: trucksIcon,
  },
];
function Stats() {
  return (
    <section id="stats">
      <div className="container">
        <ul className="statsWrapper">
          {statsData.map((stat) => (
            <li className="statItem" key={stat.id}>
              {" "}
              <img src={stat.iconUrl} alt="reload statistics" />
              <h3>{stat.value}</h3>
              <p>{stat.name}</p>
            </li>
          ))}
        </ul>
        <div className="playerWrapper">
          <ReactPlayer
            className="player"
            url="https://www.youtube.com/watch?v=jAUqiIs1zI0&list=PLo46qCRYEoACavc87CL6YNlfwYQyrOSg_"
            playIcon={<PlayIcon />}
            light={statsVideoBg}
            width="100%"
            height="647px"
          />
        </div>
      </div>
    </section>
  );
}

export default Stats;
