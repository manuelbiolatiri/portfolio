import React, { Component } from 'react';
import Converts from './Converter/Converter';
import Navigation from './Navigation/Navigation';
import { Card, Button, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Body from './Body';
import './Landing.css';
import PriceCard from './PriceCard';

class Landing extends Component {
  render() {
    return (
      <div className="">
      <article>
  <header className="bg-green san-serif flex justify-around">
    <div className=" w-50 pa4 pt5-ns tl" >
      <h3 className="f2 f1-m f-headline-l  lh-title mv0">
        <span className="bg-black-90 lh-copy white pa1 tracked-tight">
        The easiest way to sell cryptocurrency & Giftcards

        </span>
      </h3>
      <h4 className="f3 fw1 georgia i">Trusted by over 1,000 people across 2 countries since 2017.</h4>
      
                <a
                  href="/sign_up"
                  className="no-underline f6 tc db w-100 pv3 bg-animate bg-dark-pink hover-bg-dark-blue white br2"
                >
                  Sign up for free
                </a>
            
    </div>
    {/* <div className="mw9 w-50"> */}
      <img src="landing.svg" style={{ height: 500, width: 500 }}/>
      {/* </div> */}
  </header>

  <div class="container">
  <main class="grid">
    <article>
      <img src="https://picsum.photos/600/400?image=1056" alt="Sample photo"/>
      <div class="text">
      <h2 className="dark-pink  ">Instant Delivery</h2>
  <p >Using state-of-the-art payment procedures, you are guaranteed to get your payment sent to your account within minutes.</p>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1050" alt="Sample photo"/>
      <div class="text">
      <h2 className="dark-pink  ">Trusted And Secure</h2>
  <p >Trade with high confidence, as we assure you 
  the highest level of encryption and professionally audited exchange system.</p>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1041" alt="Sample photo"/>
      <div class="text">
      <h2>Fast-track Verification</h2>
  <p>Complete your account set up and start purchasing in minutes</p>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1015" alt="Sample photo"/>
      <div class="text">
      <h2 className="dark-pink  ">Support that WOWs</h2>
<p>Our team of Happiness Heroes stands by to help out with anything - any time</p>
      </div>
    </article>
  </main>
</div>

</article>

{/* <div class=" w-100 bg-white flex flex-wrap flex-row" style={{width:'100%'}}>
  <div className="center mw9 h5">
  <div class="flex-column flex fl w-50 w-25-ns tj pa3" style={{margin:'auto'}}><h2 className="dark-pink  ">Support that WOWs</h2>
<p className="black-80 measure lh-copy mv1">Our team of Happiness Heroes stands by to help out with anything - any time</p></div>
  <div class="flex-column flex fl w-50 w-25-ns tj pa3"style={{margin:'auto'}}><h2 className="dark-pink  ">Fast-track Verification</h2>
  <p className="black-80 measure lh-copy mv1">Complete your account set up and start purchasing in minutes</p></div>
  <div class="flex-column flex fl w-50 w-25-ns tj pa3" style={{margin:'auto'}}><h2 className="dark-pink  ">Trusted And Secure</h2>
  <p className="black-80 measure lh-copy mv1" style={{margin:'auto'}}>Trade with high confidence, as we assure you 
  the highest level of encryption and professionally audited exchange system.</p></div>
  <div class="flex-column flex fl w-50 w-25-ns tj pa3" style={{margin:'auto'}}><h2 className="dark-pink  ">Instant Delivery</h2>
  <p className="black-80 measure lh-copy mv1">Using state-of-the-art payment procedures, you are guaranteed to get your payment sent to your account within minutes.</p></div>
</div>
</div> */}
        <section className="ph3 ph5-ns pv5">
          <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <div>
                  <h2 className="fw4 blue mt0 mb3">This is a promo title </h2>
                  <p className="black-70 measure lh-copy mv0">
                    This is suporting copy for the wonderful promo catchphrase
                    that is going to be used.
                  </p>
                </div>
              </div>
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <a
                  href="#"
                  className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2"
                >
                  Sign up for free
                </a>
              </div>
            </div>
          </article>
        </section>
        <Body />
        <Converts />
        <section className="ph3 ph5-ns pv5">
          <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <div>
                  {/* <h2 className="fw4 blue mt0 mb3">This is a promo title </h2> */}
                  <p className="black-70 measure lh-copy mv0">
                    Join our affiliate program and Earn 15% of Flashtoken's
                    commission on<br></br>ALL of your referral's transactions
                    including all their future transactions
                  </p>
                </div>
              </div>
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <a
                  href="#"
                  className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2"
                >
                  Login to get referral link
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Landing;
