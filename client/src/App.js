import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Verify from './components/Verify/Verify';
import Referrals from './components/Referrals/Referrals';
import UploadForm from './components/UploadForm/UploadForm';
import Navigation from './components/Navigation/Navigation';
import '../src/style.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import ProtectedRoute from './components/protected_routes';
import Home from './components/home';
import Landing from './components/Landing';
import ConfirmSell from './components/confirmSell';
import Footer from './components/Footer';
import Affiliate from './components/Affiliate';
import ErrorPage from './components/ErrorPage';
import Nav from './components/Nav';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1500
      }
    }
  }
};

class App extends Component {
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Particles className="particles" params={particlesOptions} />

          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/sign_up" exact component={Register} />
            <Route path="/sign_in" exact component={Signin} />
            <Route path="/verify" exact component={Verify} />
            <Route path="/referrals/:id" exact component={Referrals} />
            <Route path="/home" exact component={Home} />
            <Route path="/affiliate" exact component={Affiliate} />
            <ProtectedRoute path={'/dashboard'} exact component={Dashboard} />
            <ProtectedRoute
              path={'/confirmsell'}
              exact
              component={ConfirmSell}
            />
            <ProtectedRoute path={'/profile'} exact component={Profile} />
            <ProtectedRoute path={'/sell'} exact component={UploadForm} />
            <Route path="/404" component={ErrorPage} />
            <Redirect from="*" to="/404" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
