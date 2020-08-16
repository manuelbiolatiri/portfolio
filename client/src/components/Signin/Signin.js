import React from 'react'
import {Link} from 'react-router-dom';
import {Alert} from 'reactstrap';
import './Signin.css';
import Navigation from '../Navigation/Navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      errorMessage: '',
      successMessage: '',
      visible: true
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    let customId = "custom-id-yes";
    try {
    fetch('http://localhost:3006/api/v1/auth/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
      .then((user) => {
        // console.log(user);
        // console.log(user);
        if(user.status === 'error') {
          toast.warn(user.error, {
            toastId: customId,
            position: toast.POSITION.TOP_RIGHT
          });
        this.setState({errorMessage: user.error});
        } else if(user.status === 'success') {
        localStorage.setItem("jwt", JSON.stringify(user.data.token));
        toast.success(user.message, {
          toastId: customId,
          position: toast.POSITION.TOP_CENTER
        });
          this.setState({successMessage: user.message});
          setTimeout(() => {
            this.props.history.push(`/dashboard`);
          }, 2000)
        //   // this.props.onRouteChange('home')
        }
      })
  
  }
    catch (e) {
      console.log(e);
  };
  }

  onDismiss = () => {
    this.setState({visible:false})
  }

  render() {
    return (
      <div className='container'>
    <Navigation/>
    {this.state.errorMessage ? <ToastContainer position= "top-right"
hideProgressBar= {false}
closeOnClick= {true}
pauseOnHover= {true}
draggable= {true}
progress= {undefined}/> : ''}
      {this.state.successMessage ? <ToastContainer position= "top-right"
hideProgressBar= {false}
closeOnClick= {true}
pauseOnHover= {true}
draggable= {true}
progress= {undefined}/> : ''}
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Login</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Email"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
            <Link to="/sign_up">
          <p className="f6 link dim black db pointer">Not registered yet? Create an account</p>
          </Link>
              
            </div>
          </div>
        </main>
      </article>
      </div>
    );
  }
}

export default Signin;