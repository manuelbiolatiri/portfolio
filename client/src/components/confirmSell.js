import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import './csell.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
// import Converts from './Converter/Converter';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [photo, setPhoto] = useState('');

  const onChangePhoto = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]))
    setImage(e.target.files[0])
  }

  const hideLoader = () => {
    setLoading(false);
  }

  const showLoader = () => {
    setLoading(true);
  }
  
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

    //  getRefs

    fetch(`https://flashtoken.herokuapp.com/api/v1/getrefs/${result.id}`)
      .then((res) => res.json())
      .then((res) => {
        setReferrals(res.data.rows[0].count);
        
      })
      .catch((res) => {
        console.log(res);
      });
  }, [username, referrals,usd, btc]);


   const onFormSubmit  = async(e)=>{
    e.preventDefault();
    showLoader();
    let customId = "custom-id-yes";
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
   await axios.post("https://flashtoken.herokuapp.com/api/v1/auth/sell", formData, config)
        .then((res) => {
          
          
          if(res.status === 400) {
            toast.warn(res.data.message, {
              toastId: customId,
              position: toast.POSITION.TOP_RIGHT
            });
          setErrorMessage(res.data.message);
          hideLoader();
          } else if(res.status === 403) {
            toast.warn(res.data.message, {
              toastId: customId,
              position: toast.POSITION.TOP_RIGHT
            });
          setErrorMessage(res.data.message);
          hideLoader();
          } else if(res.status === 201) {
            setSuccessMessage(res.data.message);
          toast.success(res.data.message, {
            toastId: customId,
            position: toast.POSITION.TOP_CENTER
          });
          setTimeout(() => {
            
            window.location.href = "/dashboard"
            hideLoader();
          }, 1900)
          }
        })
        .catch((error) => {
          console.log(error)
    });
  } else {
    setErrorMessage('You need to upload a receipt');
    toast.warn('You need to select a file', {
      toastId: customId,
      position: toast.POSITION.TOP_CENTER
    });
    hideLoader();
    
}
}
  return (
    <div>
      <div className="container center">
        {errorMessage ? <ToastContainer position= "top-right"
autoClose= '3000'
hideProgressBar= {false}
closeOnClick= {true}
pauseOnHover= {true}
draggable= {true}
progress= {undefined}/> : ''}
      {successMessage ? <ToastContainer position= "top-right"
hideProgressBar= {false}
closeOnClick= {true}
pauseOnHover= {true}
draggable= {true}
progress= {undefined}/> : ''}
        <div class="griddd">
          <divs className="container">
          <div className="br3 ba b--black-10 mv4 w-100   bg-white shadow-5 center">
          <main className="pa4 black-80">
                <div className="measure">
                    <legend className="f1 fw6 ph0 mh0 center">Sell Details</legend>
            <h2 className="mv2">Send Coin to Any of These Wallet Addresses</h2>

            <p>3BtYdafMkpGVieQtf9ZHuE4MdVqpM2jzFT</p>
            <p>3NGdrGh7c12NUfVmsyjZ9qo47LQAiWF7Y6</p>
            <h2 className="mv2">Amount</h2>
            <p style={{marginBottom:'2rem'}}>
              {usd} USD | {btc} BTC
            </p>
            {/* <Converts /> */}
            </div>
            </main>
            </div>
          </divs>
          <divs className="container">
            <article className="br3 ba b--black-10 mv4 w-100  bg-white shadow-5 center">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="confirmsale" className="ba b--transparent ph0 mh0">
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
                    {/* <div className="button-wrap mt3">
  <label class ="new-button" for="upload"><span>
  <FontAwesomeIcon icon={faCloudUploadAlt} style={{color:'white',width:'1rem',height:'1rem'}}/>
  </span> Upload Receipt</label>
  <input id="upload" type="file" onChange={e => setImage(e.target.files[0])} />
</div> */}
                    <div className=" button-wrap mt3">
              
              <input type="file" name="image" ref={fileInput => this.fileInput = fileInput}
               style={{display:'none'}} onChange={onChangePhoto} />
              <button class ="new-button" style={{border:'none'}} onClick={()=> this.fileInput.click()}><span><FontAwesomeIcon icon={faCloudUploadAlt} style={{color:'white',width:'1rem',height:'1rem'}}/>
  </span> Upload Receipt</button>
            </div>
            <div className="mt3">
            {photo ? <img src={photo} style={{width:'5rem', height:'5rem'}} alt="img"/> : ''}
            </div>
                  </fieldset>
                  <div className="">
                  <button onClick={onFormSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                {loading ? <PulseLoader css={override} color={"black"} size={6}
        /> : `Confirm Sale`}</button>
                  </div>
                </div>
              </main>
            </article>
          </divs>
        </div>
      </div>
    </div>
  );
};

export default ConfirmSell;
