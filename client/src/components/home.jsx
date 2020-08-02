import React, { Component } from 'react';
// import jwtDecode from "jwt-decode";
import {Link} from 'react-router-dom';
import Converts from './Converter/Converter';
import UploadForm from './UploadForm/UploadForm';
import NumberFormat from "react-number-format";
import axios from "axios";
import Body from './Body';
import  'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // componentDidMount(){
  //   let jwt = window.localStorage.getItem('jwt');
  //   let result = jwtDecode(jwt);
  //   this.setState({username:result.username})
  //   console.log(`The result is`, result);
  //   console.log(`the current dashboard state is`, window.localStorage);
  // }

  handleClick = (event) => {
    event.preventDefault();
    // delete localStorage.jwt
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Link to="/dashboard">
          <p  className='f3 link dim black underline pa3 pointer'>My Dashboard</p>
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
          <Link to="/signout">
          <p onClick={this.handleClick} className='f3 link dim black underline pa3 pointer'>Signout</p>
          </Link>
        </nav>
        <Body/>
        <UploadForm/>
      </div>
    );
  }
}

export default Home;
