import React from 'react';
import {Link} from 'react-router-dom';
import {Alert} from 'reactstrap';
import '../Register/Register.css';

function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  return null;
}

class Referrals extends React.Component {
  state = {
    username: '', usernameValid: false,
    email: '', emailValid: false,
    password: '', passwordValid: false,
    passwordConfirm: '', passwordConfirmValid: false,
    formValid: false,
    errorMsg: {},
    errorMessage: '',
    successMessage: '',
    visible: true
  }

  validateForm = () => {
    const {usernameValid, emailValid, passwordValid, passwordConfirmValid} = this.state;
    this.setState({
      formValid: usernameValid && emailValid && passwordValid && passwordConfirmValid
    })
  }

  updateUsername = (username) => {
    this.setState({username: username.split(" ").join("")}, this.validateUsername)
  }

  validateUsername = () => {
    const {username} = this.state;
    let usernameValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (username.length < 3) {
      usernameValid = false;
      errorMsg.username = 'Must be at least 3 characters long'
    }

    this.setState({usernameValid, errorMsg}, this.validateForm)
  }

  updateEmail = (email) => {
    this.setState({email: email.split(" ").join("")}, this.validateEmail)
  }

  validateEmail = () => {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
      errorMsg.email = 'Invalid email format'
    }

    this.setState({emailValid, errorMsg}, this.validateForm)
  }

  updatePassword = (password) => {
    this.setState({password: password.split(" ").join("")}, this.validatePassword);
  }

  validatePassword = () => {
    const {password} = this.state;
    let passwordValid = true;
    let errorMsg = {...this.state.errorMsg}

    // must be 6 chars
    // must contain a number
    // must contain a special character

    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = 'Password must be at least 6 characters long';
    } else if (!/\d/.test(password)){
      passwordValid = false;
      errorMsg.password = 'Password must contain a digit';
    } else if (!/[!@#$%^&*]/.test(password)){
      passwordValid = false;
      errorMsg.password = 'Password must contain special character: !@#$%^&*';
    }

    this.setState({passwordValid, errorMsg}, this.validateForm);
  }

  updatePasswordConfirm = (passwordConfirm) => {
    this.setState({passwordConfirm: passwordConfirm.split(" ").join("")}, this.validatePasswordConfirm)
  }

  validatePasswordConfirm = () => {
    const {passwordConfirm, password} = this.state;
    let passwordConfirmValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (password !== passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.passwordConfirm = 'Passwords do not match'
    }

    this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
  }

  onSubmitSignIn = () => {
    const { match: { params } } = this.props;
    try {
    fetch(`http://localhost:3006/api/v1/referrals/${params.id}`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => {
        if(response.status === 400){
          this.setState({errorMessage: 'User already exist'});
        } else if (response.status === 201){
          this.setState({successMessage: 'User registered successfully'});
          setTimeout(() => {
            this.props.history.push(`/verify`);
          }, 1500)
          
        }
      })

      .catch(response => {
        console.log(response)
    
    })
      
    }
    catch (e) {
      console.log(e)
  }
}


 onDismiss = () => {
   this.setState({visible:false})
 }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              
  
  { this.state.successMessage &&
  <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
  <p className="success-msg mb-0"> { this.state.successMessage } </p> </Alert>}


  
  { this.state.errorMessage &&
  <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
  <p className="error-msg mb-0"> { this.state.errorMessage } </p>
  </Alert> }


              
  
  
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                < ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} />
              <input type='text' id='username' name='username' className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)}/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                < ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
              <input type='email' id='email' name='email' className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  < ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
                  <input type='password' id='password' name='password' className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password-confirmation">Confirm Password</label>
                < ValidationMessage valid={this.state.passwordConfirmValid} message={this.state.errorMsg.passwordConfirm} />
              <input type='password' id='password-confirmation' name='password-confirmation' className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                value={this.state.passwordConfirm} onChange={(e) => this.updatePasswordConfirm(e.target.value)}/>
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="button b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                disabled={!this.state.formValid}
                type="submit"
                value="Register"
              />
              <div className="lh-copy mt3">
              <Link to="/sign_in">
          <p className="f6 link dim black db pointer">Have an account? Login!</p>
          </Link>
          </div>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Referrals;