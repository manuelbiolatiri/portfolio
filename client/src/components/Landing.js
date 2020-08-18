import React, { Component } from 'react';
import Converts from './Converter/Converter';
import Navigation from './Navigation/Navigation';
import { Card, Button, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Body from './Body';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
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
        <Body />
        <Converts />
        <div style={{ width: '50%' }} className="m-auto">
          <Card body>
            <CardText>
              Join our affiliate program and Earn 15% of Flashtoken's commission
              on<br></br>ALL of your referral's transactions including all their
              future transactions
            </CardText>
            <Link to="/sign_in">
              <Button>Login to get referral link</Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }
}

export default Landing;
