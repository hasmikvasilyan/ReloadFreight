import { ReactComponent as FireIcon } from "../assets/img/svg/fireIcon.svg";
import "../pages/home/home.css";

function Partner() {
  return (
    <div className="partner">
      <div className="titleWrapper">
        <FireIcon className="fireIcon" />
        <h3 className="title">Become a partner now</h3>
      </div>
      <button className="btn btnFilled">Join the circle</button>
    </div>
  );
}

export default Partner;
