import React from 'react';

class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verify: ''
    }
  }

  onVerifyChange = (event) => {
    this.setState({verify: event.target.value})
  }

  onSubmitVerify = (verification) => {
    try {
    fetch('http://localhost:3006/api/v1/verification', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        verify: this.state.verify
      })
    })
    .then(response => response.json())
      .then((user) => {
        // console.log(user);
        if(user.status === 'error') {
        this.setState({errorMessage: "errorrrrrr"});
        } else if(user.status === 'success') {
          this.setState({successMessage: "verifieddddd"});
            this.props.history.push(`/sign_in`);
        }
      })
  
  }
    catch (e) {
      console.log(e);
  };
  }


  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Verification</legend>
              
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Verification</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="verify"
                  id="verify"
                  placeholder="Verification code"
                  onChange={this.onVerifyChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitVerify}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Verify Account"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Verify;