import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Signin = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    let customId = "custom-id-yes";
    // setLoading(true);

    form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        // .then((response) => {
        //   .then((response) => {
        //   console.log(response.status)
          
        //   console.log(response.data)
          
        //   if(response.data.status === 'error') {
        //     toast.warn(response.error, {
        //       toastId: customId,
        //       position: toast.POSITION.TOP_RIGHT
        //     });
        //   // this.setState({errorMessage: user.error});
        //   } else if(response.data.status == 'success') {
        //   // localStorage.setItem("user", JSON.stringify(user.data.token));
        //   toast.success(response.message, {
        //     toastId: customId,
        //     position: toast.POSITION.TOP_CENTER
        //   });
        //   this.hideLoader();
        //     // this.setState({successMessage: user.message});
        //     setTimeout(() => {
        //       // this.props.history.push(`/dashboard`);
        //       <Redirect to="/profile" />
        //     }, 2000)
        //     // this.props.onRouteChange('home')
        //   }
          
        // })
        // })
        // .catch(() => {
        //   setLoading(false);
        // });
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Signin;
