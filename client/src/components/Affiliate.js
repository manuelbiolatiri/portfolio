import React from 'react';
import {Link} from 'react-router-dom';
import './Register/Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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
          visible: true,
          loading: false
        }
      
        hideLoader = () => {
          this.setState({ loading: false });
        }
      
        showLoader = () => {
          this.setState({ loading: true });
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
          this.showLoader();
          let customId = "custom-id-yes";
          try {
          fetch('https://flashtoken.herokuapp.com/api/v1/auth/create-user', {
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
                this.hideLoader();
              } else if (response.status === 201){
                toast.success('User registered successfully', {
                  toastId: customId,
                  position: toast.POSITION.TOP_CENTER
                });
                this.setState({successMessage: 'User registered successfully'});
                
                setTimeout(() => {
                  
                  this.props.history.push(`/verify`);
                  this.hideLoader();
                }, 1800)
                
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
      <div className="container center">
      <div class="griddd">
      <divs className="container">
<article class="athelas">
  <div class="vh-30 dt w-100 tc bg-transparent white" style={{marginTop:'-30px'}}>
    <div class="dtc v-mid">
      <blockquote class="ph0 mh0 measure f4 lh-copy center">
      <h1 class="f1 lh-title">Flashtoken's Affiliate Program</h1><br></br>
      </blockquote>
    </div>
  </div>
  <div class="center measure-wide f5 lh-copy ph2 white" style={{marginTop:'-20px'}}>
    <p>
    Flashtoken offers an easy, fast & secure way to sell cryptocurrency.
Join our affiliate program and get paid in bitcoin!
With Flashtoken's affiliate program, you will promote Flashtoken and generate commissions with us!.

Earn 15% of Flashtoken's commission on ALL of your referral's transaction including all their future transactions
Our affiliate program has NO LIMITATIONS! The more customers you refer, the more bitcoin you earn.
Earnings are paid monthly.
The process is fast and easy:
Register and
Send customers to our website with your customized referral link: (can be found in your dashboard)
Earn a commission for every successful transaction your referrals make


</p>
  </div>
  <div>
  <p style={{marginTop:"-35px", color:"white"}}>Register now and start earning with us!</p>
  </div>
</article>
</divs>
<divs className='container'>
<article className="br3 ba b--black-10 mv4 w-100  bg-white shadow-5 center">
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
            <button onClick={this.onSubmitSignIn}
            disabled={!this.state.formValid}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                {this.state.loading ? <PulseLoader css={override} size={6}
          color={"black"}
        /> : `Register`}</button>
              <div className="lh-copy mt3">
              <Link to="/sign_in">
          <p className="f6 link dim black db pointer">Have an account? Login!</p>
          </Link>
          </div>
            </div>
          </div>
        </main>
      </article>
      </divs>
      </div>
      </div>
);
  }
}

export default Affiliate;