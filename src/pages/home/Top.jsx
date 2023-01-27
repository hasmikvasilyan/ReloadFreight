import { Link } from "react-router-dom";
import logo from "../../assets/img/svg/logo.svg";
import Navigation from "../../components/Navigation";
import BtnGroup from "../../components/BtnGroup";

function Top() {
  return (
    <section className="top">
      <div className="topBack">
        <div className="container">
          <header>
            <Link to="/" className="logo">
              <img src={logo} alt="reload freight" />
            </Link>
            <Navigation />
          </header>
          <div className="sloganWrapper">
            <h1 className="slogan">
              <span>The one & only</span> Landstar agency in Armenia
            </h1>
            <BtnGroup/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Top;
