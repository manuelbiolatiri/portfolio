import React, {useState, useEffect} from 'react';
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";
import Tilt from 'react-tilt'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

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

let history = useHistory();
const  handleClick = (event) => {
    event.preventDefault();
    delete localStorage.jwt
    history.push("/");
  }

  // render() {

      const [isOpen, setIsOpen] = useState(false);
    
      const toggle = () => setIsOpen(!isOpen);
    return (
      <div>
        
          {/* <Navbar color="light" light  className="navbar shadow-sm p-3 mb-5 rounded bg-transparent"
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
        onClick={handleClick}>Sign out</button></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
          </Navbar> */}
      {/* <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
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
        </nav> */}
        <div className="container white">
        <CardDeck>
      <Card>
        <CardBody>
          <CardSubtitle>Balance</CardSubtitle>
          <CardText><h3>#5,000</h3></CardText>
        </CardBody>
      </Card>
      <Card>
      <CardBody>
      <CardSubtitle>No of Referrals</CardSubtitle>
          <CardText><h3>{referrals ? referrals : 'loading'}</h3></CardText>
        </CardBody>
      </Card>
      <Card>
      <CardBody>
      <CardSubtitle>No of Transactions</CardSubtitle>
          <CardText><h3>20</h3></CardText>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
        <h1>HELLO! {username}</h1>
        <h1>No of Referrals: {referrals ? referrals : 'loading'}</h1>
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        onClick={this.handleClick}>Sign out</button>
      </div>
    );
  }


export default Dashboard;
