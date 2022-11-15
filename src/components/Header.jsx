import { Link } from 'react-router-dom';
import logo from "../assets/img/svg/logo.svg";
import Navigation from "./Navigation"

function Header() {
  return (
    <header className='header'>                
        <Link to='/' className='logo'><img src={logo} alt="reload freight"/></Link>
        <Navigation/>        
    </header>
  )
}

export default Header