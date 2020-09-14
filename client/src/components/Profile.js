import React, {useState, useEffect} from 'react';
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

const Profile = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [phone, setPhone] = useState('')
    const [bank, setBank] = useState('')
    const [bankname, setBankname] = useState('')
    const [banknumber, setBanknumber] = useState('')
  const [username, setUsername] = useState('');
  const [referrals, setReferrals] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const jwt = window.localStorage.getItem("jwt");
  const result = jwtDecode(jwt);
  
useEffect( ()=>{
    setUsername(result.username)
    console.log(`The result is`, result);
    console.log(`the current dashboard state is`, window.localStorage);

    setPhone(result.phone);
    setBank(result.bank);
    setBankname(result.bankname);
    setBanknumber(result.banknumber);

    //  getRefs
       fetch(`http://localhost:3006/api/v1/getrefs/${result.id}`)
      .then(response => response.json())
      .then(res => {
         setReferrals(res.data.rows[0].count)
          // this.setState({referrals: });
          console.log(res.data.rows[0].count);
      
      })
      

      .catch(res => {
        console.log(res)
    
    })
}, [username, referrals])

const hideLoader = () => {
  setLoading(false);
}

const showLoader = () => {
  setLoading(true);
}
const customId = "custom-id-yes";

const onSubmitSave = () => {
  showLoader();
    const id = result.id;
    try {
    fetch('http://localhost:3006/api/v1/auth/profile', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          id,
          phone,
          bank,
          bankname,
          banknumber
      })
    })
    .then(response => response.json())
    .then((user) => {
        console.log(user.status);
        console.log(user);
        if(user.status === 'error') {
            toast.warn(user.error, {
                toastId: customId,
                position: toast.POSITION.TOP_RIGHT
              });
        setError(user.error)
        hideLoader();
        } else if(user.status === 'success') {
          localStorage.setItem("jwt", JSON.stringify(user.data.token));
            toast.success(user.message, {
                toastId: customId,
                position: toast.POSITION.TOP_CENTER
              });
          setSuccess(user.message);
          setTimeout(() => {
            window.location.href = "/dashboard"
          }, 1500)
          hideLoader();
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

    return (
      <div>
        
          {success ? <ToastContainer position= "top-right"
hideProgressBar= {false}
closeOnClick= {true}
pauseOnHover= {true}
draggable= {true}
progress= {undefined}/> : ''}
      {error ? <ToastContainer position= "top-right"
hideProgressBar= {false}
closeOnClick= {true}
pauseOnHover= {true}
draggable= {true}
progress= {undefined}/> : ''}
      <div className='container'>
      <article className="br3 ba b--black-10 bg-white mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sprofile" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Profile Settings</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="phone">Phone</label>
                <input
                className="pa2 input-reset ba bg-transparent   w-100"
                type="number"
                pattern="[0-9]*"
                name="phone"
                value={phone ? phone : ''}
      onChange={e => setPhone(e.target.value)}
      placeholder="Enter phone number"
     />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="bank">Bank Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent   w-100"
                  type="text"
                  name="bank"
                  placeholder="Bank"
                  value={bank ? bank : ''}
      onChange={e => setBank(e.target.value)}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="bankname">Bank Account Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent   w-100"
                  type="text"
                  name="bankname"
                  placeholder="Enter name on account"
                  value={bankname ? bankname : ''}
      onChange={e => setBankname(e.target.value)}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="banknumber">Account Number</label>
                <input
                  className="pa2 input-reset ba bg-transparent   w-100"
                  type="number"
                  name="banknumber"
                  placeholder="Account number"
                  value={banknumber ? banknumber : ''}
      onChange={e => setBanknumber(e.target.value)}
                />
              </div>
            </fieldset>
            <div className="">
            <button onClick={onSubmitSave}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                {loading ? <PulseLoader css={override} color={"black"} size={6}
        /> : `Save`}</button>
            </div>
          </div>
        </main>
      </article>
      </div>
      </div>
    );
  }


export default Profile;
