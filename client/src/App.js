import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Verify from './components/Verify/Verify';
import Referrals from './components/Referrals/Referrals';
import  'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import ProtectedRoute from './components/protected_routes';
import Home from './components/home';
import Landing from './components/Landing';

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1500
      }
    }
  }
}


class App extends Component {

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

render() {
    return (
      <Router>
      <div className="App">
      <Particles className='particles' params={particlesOptions}/>
      
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/sign_up" exact component={Register} />
          <Route path="/sign_in" exact component={Signin} />
          <Route path="/verify" exact component={Verify} />
          <Route path="/referrals/:id" exact component={Referrals} />
          <Route path="/home" exact component={Home} />
          <ProtectedRoute  path={"/dashboard"} exact component={Dashboard} />
        </Switch>
        </div>
      </Router>
    )
  }

}

export default App;
