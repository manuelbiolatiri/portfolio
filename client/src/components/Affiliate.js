import React from 'react';
import {Link} from 'react-router-dom';
import './Register/Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ValidationMessage(props) {
    if (!props.valid) {
      return(
        <div className='error-msg'>{props.message}</div>
      )
    }
    return null;
  }

class Affiliate extends React.Component {

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
          let customId = "custom-id-yes";
          try {
          fetch('http://localhost:3006/api/v1/auth/create-user', {
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
                toast.warn('User already exist', {
                  toastId: customId,
                  position: toast.POSITION.TOP_RIGHT
                });
                this.setState({errorMessage: 'User already exist'});
              } else if (response.status === 201){
                toast.success('User registered successfully', {
                  toastId: customId,
                  position: toast.POSITION.TOP_CENTER
                });
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
    return (
        <div>
<article class="athelas">
  <div class="vh-40 dt w-100 tc bg-white white">
    <div class="dtc v-mid">
      <blockquote class="ph0 mh0 measure f4 lh-copy center">
      <h1 class="f1 lh-title">Flashtoken's Affiliate Program</h1><br></br>
      </blockquote>
    </div>
  </div>
  <div class="center measure-wide f5 pv5 lh-copy ph2 white">
    <p>
    Flashtoken offers an easy, fast & secure way to sell cryptocurrency.
Join our affiliate program and get paid in bitcoin!
With Flashtoken's affiliate program, you will have the most advanced tools in the market that will allow you to promote Flashtoken and generate commissions with us! so you can promote Flashtoken.

Earn 15% of Flashtoken's commission on ALL of your referral's purchases including all their future purchases
Our affiliate program has NO LIMITATIONS! The more customers you refer, the more bitcoin you earn
Earnings are paid monthly (paid out towards the end of the following month)
Payouts will be paid only after 3 successful orders made by at least 3 different users
The process is fast and easy:
Register
Send customers to our website with your customized referral link: (can be found under the “Marketing Tools” tab in your account)
Earn a commission for every successful purchase your referrals make


</p>
  </div>
  <div>
  <p style={{marginTop:"-35px", color:"white"}}>Register now and start earning with us!
Fill Out the Form Below</p>
  </div>
</article>
<div className='container'>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 bg-white shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              
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
  
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                < ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} />
              <input type='text' id='username' name='username' className="b pa2 input-reset ba bg-transparent   w-100"
              value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)}/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                < ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
              <input type='email' id='email' name='email' className="b pa2 input-reset ba bg-transparent   w-100"
              value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  < ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
                  <input type='password' id='password' name='password' className="b pa2 input-reset ba bg-transparent   w-100"
                  value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password-confirmation">Confirm Password</label>
                < ValidationMessage valid={this.state.passwordConfirmValid} message={this.state.errorMsg.passwordConfirm} />
              <input type='password' id='password-confirmation' name='password-confirmation' className="b pa2 input-reset ba bg-transparent   w-100"
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
      </div>
      </div>

);
  }
}

export default Affiliate;