import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verify: '',
      errorMessage: '',
      successMessage: '',
      loading: false
    }
  }

  onVerifyChange = (event) => {
    this.setState({verify: event.target.value})
  }

  hideLoader = () => {
    this.setState({ loading: false });
  }

  showLoader = () => {
    this.setState({ loading: true });
  }

  onSubmitVerify = (verification) => {
    this.showLoader();
    let customId = "custom-id-yes";
    try {
    fetch('https://flashtoken.herokuapp.com/api/v1/verification', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        verify: this.state.verify
      })
    })
    .then(response => response.json())
      .then((user) => {
        
        if(user.status === 'error') {
          this.setState({errorMessage: user.error});
          toast.warn(user.error, {
            toastId: customId,
            position: toast.POSITION.TOP_RIGHT
          });
          this.hideLoader();
        
        } else if(user.status === 'success') {
          this.setState({successMessage: user.message});
          toast.success(user.message, {
            toastId: customId,
            position: toast.POSITION.TOP_CENTER
          });
          setTimeout(() => {
            
            this.props.history.push(`/sign_in`);
            this.hideLoader();
          }, 1800)
            
        }
      })
  
  }
    catch (e) {
      console.log(e);
  };
  }


  render() {
    return (
      
      <div className='container'>
        <div className="mw6 tc" style={{backgroundColor:'#90EE90', marginBottom:'15px',height:'20px',margin:'auto', justifyContent:'center'}}>
        <p style={{color:'green',margin:'auto', justifyContent:'center'}}>A Verification code has been sent to the email provided</p>
        </div>
        
        {this.state.errorMessage ? <ToastContainer position= "top-right"
autoClose= '3000'
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
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 bg-white center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Account Verification</legend>
              
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Verification</label>
                <input
                  className="pa2 input-reset ba bg-transparent  w-100"
                  type="text"
                  name="verify"
                  id="verify"
                  placeholder="Verification code"
                  onChange={this.onVerifyChange}
                />
              </div>
            </fieldset>
            <div className="">
            <button onClick={this.onSubmitVerify}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                {this.state.loading ? <PulseLoader css={override} size={6}
          color={"black"}
        /> : `Verify Account`}</button>
            </div>
          </div>
        </main>
      </article>
      </div>
    );
  }
}

export default Verify;