import { Link } from 'react-router-dom';
import logo from "../assets/img/svg/logo.svg";
import blackLogo from "../assets/img/svg/blackLogo.svg";

function Logo({isNavBarActive}) {
  return (
    <Link to='/' className='logo'><img src={isNavBarActive?blackLogo:logo} alt="reload freight"/></Link>
  )
}

export default Logo