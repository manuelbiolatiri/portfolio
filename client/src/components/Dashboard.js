import React, {useState, useEffect} from 'react';
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";
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

useEffect( ()=>{
  let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);
    setUsername(result.username)
    // this.setState({username:result.username})
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


// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       referrals: ""
//     };
//   }



//  async componentDidMount(){
//     let jwt = window.localStorage.getItem("jwt");
//     let result = jwtDecode(jwt);
//     this.setState({username:result.username})
//     console.log(`The result is`, result);
//     console.log(`the current dashboard state is`, window.localStorage);

//     //  getRefs
   
//       const res = await  fetch(`http://localhost:3006/api/v1/getrefs/${result.id}`)
//       .then(response => response.json())
//       .then(res => {
         
//           this.setState({referrals: res.data.rows[0].count});
//           console.log(res.data.rows[0].count);
      
//       })
      

//       .catch(res => {
//         console.log(res)
    
//     })

    
//   }
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
    </div>
      </div>
    );
  }


export default Dashboard;
