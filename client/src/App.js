import React, { useState, useEffect } from "react";
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
  Redirect, Link
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


import { useDispatch, useSelector } from "react-redux";
// import { Router, Switch, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import Login from "./components/Login";
// import Register from "./components/Register";
// import Home from "./components/Home";
// import Profile from "./components/Profile";
// import BoardUser from "./components/BoardUser";
// import BoardModerator from "./components/BoardModerator";
// import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

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



const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  // useEffect(() => {
  //   if (currentUser) {
  //     setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //   }
  // }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };
 
    return (
      <Router>
        <div className="App">
          <Navigation />
          <nav>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/sign_in" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/sign_in"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/sign_up"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
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

export default App;
