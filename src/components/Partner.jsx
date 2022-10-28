import fireIcon from "../assets/img/svg/fireIcon.svg";

function Partner() {
  return (
    <div className="partner">
      <div className="titleWrapper">
        <img src={fireIcon } alt="reload freight career"/>
        <h3 className="title">Become a partner now</h3>
      </div>
      <button className="btn btnFilled">Join the circle</button>
    </div>
  );
}

export default Partner;
