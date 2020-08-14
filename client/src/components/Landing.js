import React, { Component } from 'react';
import Converts from './Converter/Converter';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import  'bootstrap/dist/css/bootstrap.min.css';

 class Landing extends Component {

  render() {
    return (
      <div className='container'>
        <Navigation/>
      {/* <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Link to="/about">
          <p  className='f3 link dim black underline pa3 pointer'>About</p>
          </Link>
          <Link to="/affiliate">
          <p  className='f3 link dim black underline pa3 pointer'>Affiliate</p>
          </Link>
          <Link to="/buy">
          <p  className='f3 link dim black underline pa3 pointer'>Buy</p>
          </Link>
          <Link to="/blog">
          <p  className='f3 link dim black underline pa3 pointer'>Blog</p>
          </Link>
          <Link to="/sign_in">
          <p  className='f3 link dim black underline pa3 pointer'>Log in</p>
          </Link>
        </nav> */}
        <Body/>
        <Converts/>
        
      </div>

    );
}
}

export default Landing;
