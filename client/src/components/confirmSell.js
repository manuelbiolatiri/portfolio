import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
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
  const [usd, setUsd] = useState('');
  const [btc, setBtc] = useState('');
  const [phone, setPhone] = useState('');
  const [bank, setBank] = useState('');
  const [bankname, setBankname] = useState('');
  const [banknumber, setBanknumber] = useState('');
  const [referrals, setReferrals] = useState('');

  useEffect(() => {
    let jwt = window.localStorage.getItem('jwt');
    let usdamount = JSON.parse(window.localStorage.getItem('usdamount'));
    let btcamount = JSON.parse(window.localStorage.getItem('btcamount'));
    let result = jwtDecode(jwt);
    setUsername(result.username);
    setPhone(result.phone);
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

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      {/*         
          <Navbar color="light" light  className="navbar shadow-sm p-3 mb-5 rounded bg-transparent"
      expand="lg">
        <div className="container">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 60, width: 60 }} >
						 	<div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
						</Tilt>
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
                  <NavLink href="/sell">Sell</NavLink>
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
          </Navbar> */}
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
            <Form>
              <FormGroup>
                <Label for="exampleSelect">Select a Bank</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Select a bank</option>
                  <option>FirstBank</option>
                  <option>GTBank Plc</option>
                  <option>UBA</option>
                  <option>Zenith</option>
                  <option>Ecobank</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Bank Account Name</Label>
                <Input
                  type="text"
                  name=""
                  id="exampleEmail"
                  placeholder="Your account name"
                />
              </FormGroup>
            </Form>
          </div>
          <div>
            <article>
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
                        onChange={this.onTitleChange}
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
                        onChange={this.onTitleChange}
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
                        onChange={this.onTitleChange}
                      />
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="title">
                        Note
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white  w-100"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Leave a note(Optional)"
                        onChange={this.onTitleChange}
                      />
                    </div>
                    {/* <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="username">
                        Upload Receipt
                      </label>
                      <input
                        type="file"
                        name="image"
                        onChange={this.onChange}
                      />
                    </div> */}
                  </fieldset>
                  <div className="">
                    <input
                      onClick={this.onFormSubmit}
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
