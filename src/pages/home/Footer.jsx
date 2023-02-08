import { Link } from "react-scroll";
import logo from "../../assets/img/svg/logo.svg";
import { ReactComponent as FbIcon } from "../../assets/img/svg/fbIcon.svg";
import { ReactComponent as InstaIcon } from "../../assets/img/svg/instaIcon.svg";
import BecomePartner from "../../components/BecomePartner";

const navlinks = [
  {
    id: 1,
    name: "Success stroies",
    to: "success",
    isBtn: false,
  },
  {
    id: 2,
    name: "Partners",
    to: "partners",
    isBtn: false,
  },
  {
    id: 3,
    name: "Landstar",
    to: "landstar",
    isBtn: false,
  },
  {
    id: 4,
    name: "Contacts",
    to: "contacts",
    isBtn: false,
  },
];

function Footer() {
  return (
    <footer id="contacts">
      <div className="container">
        <BecomePartner />
        <div className="footerNav">
          <Link to="/" className="logo">
            <img src={logo} alt="reload freight" />
          </Link>
          <nav className="footerMenu">
          {navlinks.map((link) => (
          
            <Link
              key={link.id}
              className="text"
              to={link.to}
              spy={true}
              smooth={true}
              hashSpy={true}
            >
              {link.name}
            </Link>
          
        ))}
           
          </nav>
          <ul className="social">
            <li>
              <a href="https://www.facebook.com/reloadfreight/" target="_blank">
                <FbIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reloadfreight/" target="_blank">
                <InstaIcon />
              </a>
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
