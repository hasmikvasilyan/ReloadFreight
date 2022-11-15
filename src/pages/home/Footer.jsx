import { Link } from "react-scroll";
import logo from "../../assets/img/svg/logo.svg";
import { ReactComponent as FbIcon } from "../../assets/img/svg/fbIcon.svg";
import { ReactComponent as InstaIcon } from "../../assets/img/svg/instaIcon.svg";
import BecomePartner from '../../components/BecomePartner';

function Footer() {
  return (
    <footer id="contacts">
      <div className="container">
      <BecomePartner/>
        <div className="footerNav">
          <Link to="/" className="logo">
            <img src={logo} alt="reload freight" />
          </Link>
          <nav className="footerMenu">
            <Link to="test1" spy={true} smooth={true} offset={50} duration={500}  className="text">
              Success stroies
            </Link>
            <Link to="test1" spy={true} smooth={true} offset={50} duration={500}  className="text">
              Partners
            </Link>
            <Link to="test1" spy={true} smooth={true} offset={50} duration={500}  className="text">
              Landstar
            </Link>
            <Link to="test1" spy={true} smooth={true} offset={50} duration={500}  className="text">
              Contacts
            </Link>
          </nav>
          <ul className="social">
            <li>
              <FbIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
          </ul>
        </div>
        <div className="contacts">
          <a href="mailto:hr@reloadfreight.am" className="mailAddress">
            hr@reloadfreight.am
          </a>
          <p>1/3 Tsitsernakaberd Highway, Yerevan, Armenia</p>
          <p>Copyright &copy;2021 Reload Freight</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
