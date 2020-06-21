import React from 'react'
import {Link} from 'react-router-dom';
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInUsername: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInUsername: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    try {
    fetch('https://flashtoken.herokuapp.com/api/v1/auth/create-user', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.signInUsername,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then((user) => {
        console.log(user.data.token);
        localStorage.setItem("jwt", JSON.stringify(user.data.token));
        if (user.data.id) {
          this.props.history.push(`/home`);
          // this.props.onRouteChange('home')
        }
        
      })
    }
    catch (e) {
      console.log(e);
  };
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="username"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
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
    );
  }
}

export default Signin;