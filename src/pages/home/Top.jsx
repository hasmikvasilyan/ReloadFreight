import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from "../../assets/img/svg/logo.svg";
import Navigation from '../../components/Navigation';


function Top() {
    
  return (
    <section className="top">
        <div className="container">
            <header>                
                <Link to='/' className='logo'><img src={logo} alt="reload freight"/></Link>
                <Navigation/>
                
            </header>
            <div className="sloganWrapper">
                <h1 className="slogan">
                    <span>The one & only</span> Landstar agency in Armenia
                </h1>
                <div className="btnGroup">
                    <Link to='/' className='btn btnFilled'>Join the circle</Link>
                    <Link to='/' className='btn btnOutline'>Watch the video</Link>
                </div>
            </div>
    
        </div>
    </section>
    

  )
}

export default Top