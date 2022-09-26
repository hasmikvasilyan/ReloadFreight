import React from 'react';
import { Link } from 'react-scroll';
import logo from "../../assets/img/svg/logo.svg";
import './home.css'

function Top() {
  return (
    <section className="top">
        <div className="container">
            <header>
                {/* <Link activeClass="active"
                    to="successStory"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={1000}
                    isDynamic={true}
                    // onSetActive={this.handleSetActive}
                    // onSetInactive={this.handleSetInactive}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                >
                Success stroies
                </Link> */}
                <Link to='/' className='logo'><img src={logo} alt="reload freight"/></Link>
                <nav>
                    <Link to='/'>Success stroies</Link>
                    <Link to='/'>Partners</Link>
                    <Link to='/'>Landstar</Link>
                    <Link to='/'>Contacts</Link>
                    <Link to='/' className='btn btnFilledWhite'>Join the circle</Link>
                </nav>
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