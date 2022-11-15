
import fireIcon from "../assets/img/svg/fireIcon.svg";
import "../index.css";


function BecomePartner() {
  return (
    <div className="becomePartner">
      <div className="titleWrapper">
        <img src={fireIcon } alt="reload freight career"/>
        <h3 className="title">Become a partner now</h3>
      </div>
      <button className="btn btnFilled">Join the circle</button>
    </div>
  );
}

export default BecomePartner;
