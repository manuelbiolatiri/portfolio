import React, {useState, useEffect} from 'react';
import jwtDecode from "jwt-decode";
import {Link} from 'react-router-dom';

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


  // handleClick = (event) => {
  //   event.preventDefault();
  //   delete localStorage.jwt
  //   this.props.history.push("/")
  // }

  // render() {
    return (
      <div>
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Link to="/home">
    <p  className='f3 link dim black underline pa3 pointer'>Home</p>
          </Link>
          <Link to="/affiliate">
          <p  className='f3 link dim black underline pa3 pointer'>Affiliate</p>
          </Link>
          <Link to="/buy">
          <p  className='f3 link dim black underline pa3 pointer'>Buy</p>
          </Link>
          <Link to="/blog">
          <p  className='f3 link dim black underline pa3 pointer'>Blog</p>
          </Link>
          <Link to="/signout">
          <p onClick={this.handleClick} className='f3 link dim black underline pa3 pointer'>Signout</p>
          </Link>
        </nav>
        <h1>HELLO! {username}</h1>
        <h1>No of Referrals: {referrals ? referrals : 'loading'}</h1>
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        onClick={this.handleClick}>Sign out</button>
      </div>
    );
  }


export default Dashboard;
