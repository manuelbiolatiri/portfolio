import React, { Component } from 'react';
import jwtDecode from "jwt-decode";
import {Link} from 'react-router-dom';
import Admin from './Admin/Admin';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount(){
    let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);
    this.setState({username:result.username})
    console.log(`The result is`, result);
    console.log(`the current dashboard state is`, window.localStorage);
  }


  handleClick = (event) => {
    event.preventDefault();
    delete localStorage.jwt
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Link to="/home">
          <p  className='f3 link dim black underline pa3 pointer'>Home</p>
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
        <h1>HELLO! {this.state.username}</h1>
        <button onClick={this.handleClick}>Sign out</button>
        <Admin/>
      </div>
    );
  }
}

export default Dashboard;
