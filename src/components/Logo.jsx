import { Link } from 'react-router-dom';
import logo from "../assets/img/svg/logo.svg";

function Logo() {
  return (
    <Link to='/' className='logo'><img src={logo} alt="reload freight"/></Link>
  )
}

export default Logo