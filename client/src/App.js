import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
// import Logo from './components/Logo/Logo';
// import Crypto from './components/Crypto/Crypto';
// import Converts from './components/Converter/Converter';
// import UploadForm from './components/UploadForm/UploadForm';
// import NumberFormat from "react-number-format";
import axios from "axios";
// import Body from './components/Body';
import  'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./components/dashboard";
import ProtectedRoute from './components/protected_routes';
import Home from './components/home';
import Landing from './components/Landing';
import Admin from './components/Admin/Admin';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

// const initialState = {
//   input: '',
//   route: 'signin',
//   isSignedIn: false,
//   cryptos: [],
//   user: {
//     id: '',
//     username: ''
//   }
// }

class App extends Component {
  constructor() {
    super();
    // this.state = initialState;
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  

  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState(initialState)
  //   } else if (route === 'home') {
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }

  // componentDidMount() {
  //   fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
  //     .then(res => {
  //       const cryptos = res.data;
  //       console.log(cryptos);
  //       this.setState({cryptos: cryptos});
  //     })
  // }
render() {
    return (
      <Router>
      <div className="App">
      <Particles className='particles' params={particlesOptions}/>
      
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/sign_up" exact component={Register} />
          <Route path="/sign_in" exact component={Signin} />
          <ProtectedRoute
        path={"/dashboard"}
        exact component={Dashboard}
        />
        <ProtectedRoute path={"/admin"} exact component={Admin}/>
          {/* {localStorage.jwt === null ? <Route path="/dashboard" component={Dashboard} /> : <Redirect to="/"/>} */}
        </Switch>
        </div>
      </Router>
    )
  }


}

export default App;