import React, {useState, useEffect} from 'react';
import jwtDecode from "jwt-decode";
import {useHistory} from 'react-router-dom';
import Tilt from 'react-tilt'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const jwt = window.localStorage.getItem("jwt");
  const result = jwtDecode(jwt);
  
useEffect( ()=>{
    setUsername(result.username)
    console.log(`The result is`, result);
    console.log(`the current dashboard state is`, window.localStorage);

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

const customId = "custom-id-yes";

const onSubmitSave = () => {
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
        } else if(user.status === 'success') {
            toast.success(user.message, {
                toastId: customId,
                position: toast.POSITION.TOP_CENTER
              });
          setSuccess(user.message);
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
        
          <Navbar color="light" light  className="navbar shadow-sm p-3 mb-5 rounded bg-transparent"
      expand="lg">
        <div className="container">
        <NavLink href="/">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 60, width: 60 }} >
						 	<div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
						</Tilt>
            </NavLink>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/profile">Hi, {username}</NavLink>
                </NavItem>
              <NavItem>
                  <NavLink href="/dashboard">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Sell</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/affiliate">Affiliate</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Contact Support</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/logout"><button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        onClick={this.handleClick}>Sign out</button></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
          </Navbar>
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
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sprofile" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Profile Settings</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="phone">Phone</label>
                <input
                className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                type="text"
                pattern="[0-9]*"
                name="phone"
                value={phone}
      onChange={e => setPhone(e.target.value)}
      placeholder="Enter phone number"
     />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="bank">Bank Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="text"
                  name="bank"
                  placeholder="Bank"
                  value={bank}
      onChange={e => setBank(e.target.value)}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="bankname">Bank Account Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="text"
                  name="bankname"
                  placeholder="Enter name on account"
                  value={bankname}
      onChange={e => setBankname(e.target.value)}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="banknumber">Account Number</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="text"
                  name="banknumber"
                  placeholder="Account number"
                  value={banknumber}
      onChange={e => setBanknumber(e.target.value)}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={onSubmitSave}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Save"
              />
            </div>
          </div>
        </main>
      </article>
      </div>
      </div>
    );
  }


export default Profile;
