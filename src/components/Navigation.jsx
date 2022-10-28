import { useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import NavIcon from './NavIcon';
const navlinks=[
    {
        id:1,
        name:'Success stroies',
        to:'success',
        isBtn:false,
    },
    {
        id:2,
        name:'Partners',
        to:'partners',
        isBtn:false,
    },
    {
        id:3,
        name:'Landstar',
        to:'landstar',
        isBtn:false,
    },
    {
        id:4,
        name:'Contacts',
        to:'contacts',
        isBtn:false,
    },
    {
        id:5,
        name:'Join the circle',
        to:'contacts',
        isBtn:true,
    },
]

function Navigation() {

    const [isNavBarActive, setIsNavBarActive]=useState(false)

    const handleMenuOpen=()=>{
        setIsNavBarActive(prevState=>!prevState)
    }

  return (
    <nav>
        <ul className={`navBar${isNavBarActive?" c":""} `}>
        {
            navlinks.map(link=>(
                <li  key={link.id} >
                    <Link 
                       
                        className={`navLink${link.isBtn?" btn btnFilledWhite":""}`} 
                        to={link.to}
                        spy={true}
                        smooth={true}
                        hashSpy={true}>
                            {link.name}
                    </Link>
                </li>                
            ))
        } 
        </ul>
        <NavIcon onMenuOpen={handleMenuOpen}/>       
    </nav>
  );
}

export default Navigation;