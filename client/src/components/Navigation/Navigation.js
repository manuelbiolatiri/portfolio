import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useHistory, Redirect,Link } from "react-router-dom";
import Tilt from 'react-tilt'

import './Navigation.css'

import { history } from "../../helpers/history";

const Navigation = (props) => {

  // state = {
  //   isLoggedIn : false
  // }
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // clickLogin = () => {
  //   this.setState({isLoggedIn:true});
  // }

  const clickLogout = () => {
    localStorage.removeItem("jwt")
    window.location.href = "/sign_in"
    // history.push('/sign_in')
  }



  let history = useHistory();
  let token = localStorage.jwt;
 
  if (token){
    return (
        
      <header className="bg-transparent">
<section>
<Link to="/" id="logo" target="_blank"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 50, width: 60 }} >
           <div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
</Tilt></Link>

<label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
<input type="checkbox" id="toggle-1"/>

<nav>
<ul>
<li><Link to="/dashboard">Dashboard</Link></li>
<li><Link to="/">Sell</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/affiliate">Affiliate</Link></li>
<li><Link to="/profile"><i class="fas fa-gear"></i>Profile</Link></li>
<li><Link to="/contact"><i class="fa fa-phone"></i>Contact</Link></li>
<li><a><button className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
onClick={
  clickLogout
}>Sign out</button></a></li>
</ul>

</nav>
</section>
</header>
    )
  } else {
    return (
        
      <header className="bg-transparent">
<section>
<Link to="/" id="logo" target="_blank"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 50, width: 60 }} >
           <div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
</Tilt></Link>

<label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
<input type="checkbox" id="toggle-1"/>

<nav>
<ul>
<li><Link to="/">Sell</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/affiliate">Affiliate</Link></li>
<li><Link to="/sign_up">Register</Link></li>
<li><Link to="/sign_in">Login</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>

</nav>
</section>
</header>
    )
  }
    
}

export default Navigation;