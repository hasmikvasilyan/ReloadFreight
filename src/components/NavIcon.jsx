import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';


function NavIcon({onMenuOpen}) {
    const [closed,setClosed]=useState(true);

    const handleClick=()=>{
        setClosed(prevState=>!prevState)
        onMenuOpen()
    }
  return (
    <button className="menuIcon" onClick={handleClick}>
        {closed?<FaBars size="3rem"/>:<CgClose size="3rem"/>}
    </button>
  );
}

export default NavIcon;
