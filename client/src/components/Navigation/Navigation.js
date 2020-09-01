import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import jwtDecode from "jwt-decode";
import { useHistory, Redirect } from "react-router-dom";
import Tilt from 'react-tilt'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import './Navigation.css'

const Navigation = (props) => {

  let history = useHistory();
  let token = localStorage.jwt;
const  handleClick = (event) => {
    event.preventDefault();
    delete localStorage.jwt
    // <Redirect component={Landing}/>
    history.push("/");
  }

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   delete localStorage.jwt
  //   // history.go("/");
  // }

  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
 
  if (token){
    return (
        
      <header className="bg-transparent">
<section>
<a href="/" id="logo" target="_blank"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 60, width: 60 }} >
           <div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
</Tilt></a>

<label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
<input type="checkbox" id="toggle-1"/>

<nav>
<ul>
<li><a href="/"><i class="fa fa-home"></i>Sell</a></li>
<li><a href="/about"><i class="fa fa-user"></i>About</a></li>
<li><a href="affiliate"><i class="fas fa-thumbs-up-alt"></i>Affiliate</a></li>
<li><a href="sign_up"><i class="fas fa-gear"></i>Register</a></li>
<li><a href="/sign_in"><i class="fa fa-picture"></i>Login</a></li>
<li><a href="/contact"><i class="fa fa-phone"></i>Contact</a></li>
<li><a><button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
      onClick={handleClick}>Sign out</button></a></li>
</ul>

</nav>
</section>
</header>
    )
  } else {
    return (
        
      <header className="bg-transparent">
<section>
<a href="/" id="logo" target="_blank"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 60, width: 60 }} >
           <div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
</Tilt></a>

<label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
<input type="checkbox" id="toggle-1"/>

<nav>
<ul>
<li><a href="/"><i class="fa fa-home"></i>Sell</a></li>
<li><a href="/about"><i class="fa fa-user"></i>About</a></li>
<li><a href="affiliate"><i class="fas fa-thumbs-up-alt"></i>Affiliate</a></li>
<li><a href="sign_up"><i class="fas fa-gear"></i>Register</a></li>
<li><a href="/sign_in"><i class="fa fa-picture"></i>Login</a></li>
<li><a href="/contact"><i class="fa fa-phone"></i>Contact</a></li>
</ul>

</nav>
</section>
</header>
    )
  }
     
// {/* 
//         <Navbar
//       color="light"
//       light
//       className="navbar shadow-sm p-3 mb-5 rounded bg-transparent"
//       expand="lg"
//     >
//       <div className="container">
//             <NavLink tag={Link} to={"/"}>
//       <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 60, width: 60 }} >
// 						 	<div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
// 						</Tilt>
//             </NavLink>
//       <NavbarToggler onClick={toggleTopbar} />
//       <Collapse isOpen={topbarIsOpen} navbar>
//         <Nav className="ml-auto" navbar>
//           <NavItem>
//             <NavLink tag={Link} to={"/"}>
//               Home
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink tag={Link} to={"/"}>
//               Sell
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink tag={Link} to={"/affiliate"}>
//               Affiliate
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink tag={Link} to={"/sign_up"}>
//               Register
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink tag={Link} to={"/sign_in"}>
//               Sign In
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink tag={Link} to={"/signout"} onClick={handleClick}>
//               Sign Out
//             </NavLink>
//           </NavItem>
//         </Nav>
//       </Collapse>
//       </div>
//     </Navbar> */}
    
}

export default Navigation;