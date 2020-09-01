import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CardSubtitle,
  CardBody
} from 'reactstrap';
import Converts from './Converter/Converter';

const ConfirmSell = (props) => {
  const [username, setUsername] = useState('');
  const [note, setNote] = useState('');
  const [usd, setUsd] = useState('');
  const [btc, setBtc] = useState('');
  const [bank, setBank] = useState('');
  const [bankname, setBankname] = useState('');
  const [banknumber, setBanknumber] = useState('');
  const [referrals, setReferrals] = useState('');
  const [image, setImage] = useState('');
  
  let jwt = window.localStorage.getItem('jwt');
  const result = jwtDecode(jwt);

  useEffect(() => {
    
    let usdamount = JSON.parse(window.localStorage.getItem('usdamount'));
    let btcamount = JSON.parse(window.localStorage.getItem('btcamount'));
    
    setUsername(result.username);
    setBank(result.bank);
    setBankname(result.bankname);
    setBanknumber(result.banknumber);
    setUsd(usdamount);
    setBtc(btcamount);

    console.log(`The result is`, result);
    console.log(`the current dashboard state is`, window.localStorage);

    //  getRefs

    fetch(`http://localhost:3006/api/v1/getrefs/${result.id}`)
      .then((response) => response.json())
      .then((res) => {
        setReferrals(res.data.rows[0].count);
        console.log(res.data.rows[0].count);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [username, referrals]);


   const onFormSubmit  = async(e)=>{
    e.preventDefault();
    if (image) {
    const formData = new FormData();
    formData.append('image',image);
    formData.set('note',note);
    formData.set('bank',bank);
    formData.set('bankname',bankname);
    formData.set('banknumber',banknumber);
    formData.set('amount_usd',usd);
    formData.set('amount_btc',btc);
    formData.set('userId',result.id);
    formData.set('email',result.email);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
        
    };
   await axios.post("http://localhost:3006/api/v1/auth/sell", formData, config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
          console.log(error)
    });
  } else {
    console.log('You need to select a file');
}
}
  return (
    <div>
      <div className="container center">
        <div className="flex flex-wrap">
          <div>
            <h3>Send Coin to Any of These Wallet Addresses</h3>

            <h3>wiorivnirvnroihwr48394489y3hfc8n5</h3>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="username">
                Upload Receipt
              </label>
              <input type="file" name="image" onChange={this.onChange} />
            </div>
            <h3>Amount</h3>
            <br></br>
            <h4>
              {usd} | {btc}
            </h4>
          </div>
          <div>
            <article className=" bg-white">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sell Bitcoin</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="bank">
                        Bank
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white  w-100"
                        type="text"
                        name="title"
                        id="title"
                        value={bank ? bank : ''}
                        placeholder="Enter your bank"
                        onChange={e => setBank(e.target.value)}
                      />
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="bankname">
                        Bank Account Name
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white  w-100"
                        type="text"
                        name="title"
                        id="title"
                        value={bankname ? bankname : ''}
                        placeholder="Enter your account name"
                        onChange={e => setBankname(e.target.value)}
                      />
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="banknumber">
                        Account Number
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white  w-100"
                        type="text"
                        name="title"
                        id="title"
                        value={banknumber ? banknumber : ''}
                        placeholder="Enter your account number"
                        onChange={e => setBanknumber(e.target.value)}
                      />
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="note">
                        Note
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white  w-100"
                        type="text"
                        name="note"
                        id="note"
                        placeholder="Leave a note(Optional)"
                        value={note}
                        onChange={e => setNote(e.target.value)}
                      />
                    </div>
                    <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="image">
                Upload Receipt
              </label>
              <input type="file" name="image" onChange={e => setImage(e.target.files[0])} />
            </div>
                  </fieldset>
                  <div className="">
                    <input
                      onClick={onFormSubmit}
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Sell"
                    />
                  </div>
                </div>
              </main>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmSell;
