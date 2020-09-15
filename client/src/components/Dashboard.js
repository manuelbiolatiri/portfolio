import React, {useState, useEffect} from 'react';
import jwtDecode from "jwt-decode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faRetweet, faExchangeAlt} from '@fortawesome/free-solid-svg-icons'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const Dashboard = () => {
  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [referrals, setReferrals] = useState('');

  const jwt = window.localStorage.getItem("jwt");
    const result = jwtDecode(jwt);

useEffect( ()=>{
  
    setUsername(result.username)
    // this.setState({username:result.username})
    console.log(`The result is`, result);
    console.log(`the current dashboard state is`, window.localStorage);

    //  getRefs
   
       fetch(`http://localhost:3006/api/v1/getrefs/${result.username}`)
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

    return (
      <div>
        
        <div className="container white">
        <h2 className=" tc">Hi! {username}</h2>
        <div class=" jt center">
  <main class="gd">
    <article style={{margin:"12px 0"}}>
    <FontAwesomeIcon icon={faDollarSign} style={{color:'white',width:'3rem',height:'3rem'}} />
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2 ">Balance</h2>
  <p >#5.5000</p>
      </div>
    </article>
    <article style={{margin:"12px 0"}}>
    <FontAwesomeIcon icon={faRetweet} style={{color:'white',width:'3rem',height:'3rem'}} />
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2">Referrals</h2>
  <p>{referrals ? referrals : <ClipLoader css={override} color={"white"} size={35}
        />}</p>
      </div>
    </article>
    <article style={{margin:"12px 0"}}>
    <FontAwesomeIcon icon={faExchangeAlt} style={{color:'white',width:'3rem',height:'3rem'}} />
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2 ">No of Transactions</h2>
<p>0</p>
      </div>
    </article>
  </main>
</div>
<div className="container white">
<p className=" tc"><span><h5>Your referral link: </h5></span>http://localhost:3000/referrals/{username}</p>
</div>
    </div>
      </div>
    );
  }


export default Dashboard;
