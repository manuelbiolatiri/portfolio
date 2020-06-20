import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Converts from './Converter/Converter';
import NumberFormat from "react-number-format";
import axios from "axios";
import Body from './Body';
import Faq from './Faq';
import Footer from './Footer';
import  'bootstrap/dist/css/bootstrap.min.css';

 class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
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
        </nav>
        <Body/>
        <Converts/>
        
      </div>

    );
}
}

export default Landing;
