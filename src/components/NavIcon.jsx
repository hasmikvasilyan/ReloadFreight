import { useState } from 'react';
// import { IoMenu} from 'react-icons/lo';
import { MdMenu } from 'react-icons/md';
// import { FaBeer } from 'react-icons/fa';
import { ReactComponent as MenuIcon } from "../assets/img/svg/menuIcon.svg"



function NavIcon({onMenuOpen}) {
    const [closed,setClosed]=useState(true);

    const handleClick=()=>{
        setClosed(prevState=>!prevState)
        onMenuOpen()
    }
  return (
    <button className="menuIcon" onClick={handleClick}>
        <MenuIcon/>
    </button>
  );
}

export default NavIcon;
