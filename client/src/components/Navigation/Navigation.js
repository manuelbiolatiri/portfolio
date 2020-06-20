import React from 'react';
import {Link} from 'react-router-dom';
import jwtDecode from "jwt-decode";



const Navigation = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    delete localStorage.jwt
    this.props.history.push("/")
  }
      return (
        
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Link to="/home">
          <p  className='f3 link dim black underline pa3 pointer'>Affiliate</p>
          </Link>
          <Link to="/buy">
          <p  className='f3 link dim black underline pa3 pointer'>Buy</p>
          </Link>
          <Link to="/blog">
          <p  className='f3 link dim black underline pa3 pointer'>Blog</p>
          </Link>
          <button onClick={this.handleClick}>Sign out</button>
        </nav>

        // : <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        //   <p  className='f3 link dim black underline pa3 pointer'>Sign In</p>
        //   <p  className='f3 link dim black underline pa3 pointer'>Register</p>
        // </nav>
    
      );
}

export default Navigation;