import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import UploadForm from './UploadForm/UploadForm';
import Body from './Body';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <Navigation />
        <Body />
        <UploadForm />
      </div>
    );
  }
}

export default Home;
