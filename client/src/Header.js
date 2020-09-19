import React, { useState } from "react";
import styled from "styled-components";
import {Link, useHistory } from "react-router-dom";
import Tilt from 'react-tilt'
import './styles.css'

const Nav = styled.nav`
  padding: 0 100px;
  height: 4rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  @media (max-width: 768px) {
    width:100%;
    padding: 0 30px;
  }
`;

const Logo = styled.h1`
  font-size: 25px;
  color: #060c14;
  vertical-align: middle;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  width:auto;

  li {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Links = styled.a`
  color: #060c14;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #060c14;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "70vh" : 0)};
  width: 100vw;
  background: #fff;
  transition: height 0.4s ease-in-out;
  z-index: 1;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 45%;
  top: 26%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 20px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    // margin: 50px 0px;
  }
`;

const Header = () => {
    let history = useHistory();


    const clickLogout = () => {
      localStorage.removeItem("jwt")
      window.location.href = "/sign_in"
      history.push('/sign_in')
    }
  const [toggle, toggleNav] = useState(false);
  let token = localStorage.jwt;
 
  if (token){
    return (
    <div className="navv">
      <Nav>
        <Logo><Link to="/" id="logo"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 50, width: 50 }} >
           <div className="Tilt-inner"><img src="Flashtokenlogo.jpg" alt="website logo"/></div>
</Tilt></Link></Logo>
        <Menu>
          <Item>
          <Link to="/dashboard" className="link">Dashboard</Link>
          </Item>
          <Item>
          <Link to="/" className="link">Sell</Link>
          </Item>
          <Item>
          <Link to="/about" className="link">About</Link>
          </Item>
          <Item>
          <Link to="/affiliate" className="link">Affiliate</Link>
          </Item>
          <Item>
          <Link to="/profile" className="link">Profile</Link>
          </Item>
          <Item>
          <Link to="#footer" className="link">Contact</Link>
          </Item>
          <Item>
          <button className="b ph3 pv2 input-reset ba b--black black bg-transparent grow pointer f6 dib"
onClick={
  clickLogout
}>Sign out</button>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
          <Links href="/dashboard">Dashboard</Links>
          </Item>
          <Item>
          <Links href="/">Sell</Links>
          </Item>
          <Item>
          <Links href="/about">About</Links>
          </Item>
          <Item>
          <Links href="/affiliate">Affiliate</Links>
          </Item>
          <Item>
          <Links href="/profile">Profile</Links>
          </Item>
          <Item>
          <Links href="#footer">Contact</Links>
          </Item>
          <Item>
          <button className="b ph3 pv2 input-reset ba b--black black bg-transparent grow pointer f6 dib"
onClick={
  clickLogout
}>Sign out</button>
          </Item>
        </OverlayMenu>
      </Overlay>
    </div>
    ) } else {
        return (
            <div className="navv">
      <Nav>
        <Logo><Links href="/" id="logo"><Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 50, width: 50 }} >
           <div className="Tilt-inner"><img src="Flashtokenlogo.jpg" alt="website logo"/></div>
</Tilt></Links></Logo>
        <Menu>
        <Item>
          <Link to="/" className="link">Sell</Link>
          </Item>
          <Item>
          <Link to="/about" className="link">About</Link>
          </Item>
          <Item>
          <Link to="/affiliate" className="link">Affiliate</Link>
          </Item>
          <Item>
          <Link to="/sign_up" className="link">Register</Link>
          </Item>
          <Item>
          <Link to="/sign_in" className="link">Login</Link>
          </Item>
          <Item>
          <Link to="#footer" className="link">Contact</Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
          <Links href="/">Sell</Links>
          </Item>
          <Item>
          <Links href="/about">About</Links>
          </Item>
          <Item>
          <Links href="/affiliate">Affiliate</Links>
          </Item>
          <Item>
          <Links href="/sign_up">Register</Links>
          </Item>
          <Item>
          <Links href="/sign_in">Login</Links>
          </Item>
          <Item>
          <Links href="/#footer">Contact</Links>
          </Item>
        </OverlayMenu>
      </Overlay>
    </div>
        )
    }
};

export default Header;