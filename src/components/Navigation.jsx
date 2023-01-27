import { useState } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import { ReactComponent as CloseIcon } from "../assets/img/svg/closeIcon.svg";
import { ReactComponent as MenuIcon } from "../assets/img/svg/menuIcon.svg";
import Logo from "./Logo";
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
  {
    id: 5,
    name: "Join the circle",
    to: "contacts",
    isBtn: true,
  },
];

function Navigation() {
  const [isNavBarActive, setIsNavBarActive] = useState(false);

  const handleMenuToggle = () => {
    setIsNavBarActive((prevState) => !prevState);
  };
  const handleClick=()=>{
    setIsNavBarActive(false);
  }
  return (
    <nav>
      <div className={`${isNavBarActive ? "active" : ""} `}>
      {isNavBarActive&&(
      <div className="responsiveMenuTop">
        <Logo isNavBarActive={isNavBarActive}/>
        <CloseIcon onClick={handleMenuToggle}/>
      </div>)}
      <ul className={`navBar`}>
        {navlinks.map((link) => (
          <li key={link.id}>
            <Link
              className={`navLink${!link.isBtn ? "": ` btn btnFilled${!isNavBarActive?"White":""}`}`}
              to={link.to}
              spy={true}
              smooth={true}
              hashSpy={true}
              onClick={handleClick}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      </div>
      <MenuIcon className="menuIcon" onClick={handleMenuToggle}/>
      {/* <NavIcon onMenuOpen={handleMenuOpen} /> */}
      
    </nav>
  );
}

export default Navigation;
