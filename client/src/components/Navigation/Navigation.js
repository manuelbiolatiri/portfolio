import React from "react";
import {Link } from "react-router-dom";
import Tilt from 'react-tilt'

import './Navigation.css'

const Navigation = (props) => {


  const clickLogout = () => {
    localStorage.removeItem("jwt")
    window.location.href = "/sign_in"
    // history.push('/sign_in')
  }

  let token = localStorage.jwt;
 
  if (token){
    return (

      <header class="header" className="bg-white">
  <a href="/" class="logo"><span><Link to="/" id="logo" target="_blank"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 40, width: 55 }} >
           <div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
</Tilt></Link>
</span>Flashtoken</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a ><Link to="/dashboard">Dashboard</Link></a></li>
    <li><a><Link to="/">Sell</Link></a></li>
    <li><a><Link to="/about">About</Link></a></li>
    <li><a><Link to="/affiliate">Affiliate</Link></a></li>
    <li><a><Link to="/profile"><i class="fas fa-gear"></i>Profile</Link></a></li>
    <li><a><Link to="#footer"><i class="fa fa-phone"></i>Contact</Link></a></li>
    <li><a><button className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
onClick={
  clickLogout
}>Sign out</button></a></li>
  </ul>
</header>
        
//       <header className="bg-transparent">
// <section>
// <Link to="/" id="logo" target="_blank"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 50, width: 60 }} >
//            <div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
// </Tilt></Link>

// <label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
// <input type="checkbox" id="toggle-1"/>

// <nav>
// <ul>
// <li><Link to="/dashboard">Dashboard</Link></li>
// <li><Link to="/">Sell</Link></li>
// <li><Link to="/about">About</Link></li>
// <li><Link to="/affiliate">Affiliate</Link></li>
// <li><Link to="/profile"><i class="fas fa-gear"></i>Profile</Link></li>
// <li><Link to="#footer"><i class="fa fa-phone"></i>Contact</Link></li>
// <li><a><button className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
// onClick={
//   clickLogout
// }>Sign out</button></a></li>
// </ul>

// </nav>
// </section>
// </header>
    )
  } else {
    return (

      <header class="header" className="bg-white">
  <a href="/" class="logo"><span><Link to="/" id="logo" target="_blank"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 40, width: 55 }} >
           <div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
</Tilt></Link>
</span>Flashtoken</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
  <li><a><Link to="/">Sell</Link></a></li>
<li><a><Link to="/about">About</Link></a></li>
<li><a><Link to="/affiliate">Affiliate</Link></a></li>
<li><a><Link to="/sign_up">Register</Link></a></li>
<li><a><Link to="/sign_in">Login</Link></a></li>
<li><a><Link to="#footer">Contact</Link></a></li>
  </ul>
</header>
        
//       <header  className="bg-transparent">
// <section>
// <Link to="/" id="logo" target="_blank"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 40, width: 55 }} >
//            <div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
// </Tilt></Link>

// <label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
// <input type="checkbox" id="toggle-1"/>

// <nav>
// <ul>
// <li><Link to="/">Sell</Link></li>
// <li><Link to="/about">About</Link></li>
// <li><Link to="/affiliate">Affiliate</Link></li>
// <li><Link to="/sign_up">Register</Link></li>
// <li><Link to="/sign_in">Login</Link></li>
// <li><Link to="#footer">Contact</Link></li>
// </ul>

// </nav>
// </section>
// </header>
    )
  }
    
}

export default Navigation;