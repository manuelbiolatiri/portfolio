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
  <header className="bg-transparent san-serif flex justify-around">
    <div className=" w-50 respo pa4 pt5-ns tl" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
      <h3 className=" fsm  fs lh-title mv0 ">
        <span className="bg-black-90 lh-copy white pa1 tracked-tight">
        The easiest way to sell cryptocurrency & Giftcards

        </span>
      </h3>
      <h4 className="f3 fw1 georgia i mb2 white">Trusted by over 1,000 people across 2 countries since 2017.</h4>
      
                <a
                  href="/sign_up"
                  className="no-underline f6 tc db w-100 pv3 bg-animate button  ph3 pv2 input-reset ba b--white mt4 bg-white grow pointer f6 dib black-80 br2"
                >
                  Sign up for free
                </a>
            
    </div>
    {/* <div className="mw9 w-50"> */}
      <img src="landing.svg" className="img" style={{ height: 500, width: 500 }}
      data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
      {/* </div> */}
  </header>
</article>

  {/* <div className="marque">
    <div class="content">
    <div class="flex w-100">
        <div class="w-25">yterereret</div>
        <div class="w-25">tyetettut</div>
        <div class="w-25">yuryry</div>
        <div class="w-25">iyryyrtrtyertweqerwtu646</div>
      </div>
    </div>
  </div> */}
  <div className="bg-white">
      <Body />
     <Converts />
  </div>

  
{/* <div className="bg-dark-pink h2">
<h1 className="white center">Giftcards Rates</h1>
</div> */}
<div className="pv3 bg-white" style={{textAlign:'center',width:'100%'}}>
    <h2 className="black-70">Chat With Us For A Flash Giftcards Transaction</h2>
  </div>
<div class="center bg-white">
  
  <main class="gridd" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
    <article>
      <img src="https://i.pinimg.com/236x/b0/f7/fc/b0f7fc969633b3effc5c022b46279f56--gift-cards.jpg" className="w-100" alt="Sample photo"/>
      <div class="text">
  <p >Itunes | 240/$</p>
      </div>
    </article>
    <article>
      <img src="https://i.pinimg.com/236x/b0/f7/fc/b0f7fc969633b3effc5c022b46279f56--gift-cards.jpg" alt="Sample photo"/>
      <div class="text">
  <p >Amazon | 240/$</p>
      </div>
    </article>
    <article>
      <img src="https://i.pinimg.com/236x/b0/f7/fc/b0f7fc969633b3effc5c022b46279f56--gift-cards.jpg" className="w-100" alt="Sample photo"/>
      <div class="text">
  <p>Steam | 250$</p>
      </div>
    </article>
    <article>
    
      <img src="https://i.pinimg.com/236x/b0/f7/fc/b0f7fc969633b3effc5c022b46279f56--gift-cards.jpg" alt="Sample photo"/>
      <div class="text">
<p>Ebay | 240/$</p>
      </div>
    </article>
  </main>
</div>
<div class="  center">
  <main class="grid">
    <article style={{margin:"12px 0"}}>
      {/* <img src="https://picsum.photos/600/400?image=1056" alt="Sample photo"/> */}
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2 ">Instant Delivery</h2>
  <p >Using state-of-the-art payment procedures, you are guaranteed to get your payment sent to your account within minutes.</p>
      </div>
    </article>
    <article style={{margin:"12px 0"}}>
      {/* <img src="https://picsum.photos/600/400?image=1050" alt="Sample photo"/> */}
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2 ">Trusted And Secure</h2>
  <p >Trade with high confidence, as we assure you 
  the highest level of encryption and professionally audited exchange system.</p>
      </div>
    </article>
    <article style={{margin:"12px 0"}}>
      {/* <img src="https://picsum.photos/600/400?image=1041" alt="Sample photo"/> */}
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2">Verification In A Flash</h2>
  <p>Complete your account set up and start purchasing in minutes</p>
      </div>
    </article>
    <article style={{margin:"12px 0"}}>
      {/* <img src="https://picsum.photos/600/400?image=1015" alt="Sample photo"/> */}
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2 ">Responsive Support</h2>
<p>Our team of Happiness Heroes stands by to help out with anything - any time</p>
      </div>
    </article>
  </main>
</div>
        <section className="ph3 ph5-ns pv5"
        data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <article className="mw8 center br2 ba b--light-blue bg-white">
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <div>
                  {/* <h2 className="fw4 blue mt0 mb3">This is a promo title </h2> */}
                  <p className="black-70 measure lh-copy mv0">
                    Join our affiliate program and Earn 15% of Flashtoken's
                    commission on ALL of your referral's transactions
                    including all their future transactions
                  </p>
                </div>
              </div>
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <a
                  href="/sign_in"
                  className="no-underline f6 tc db w-100 pv3 bg-animate bg-black-80 grow pointer hover-bg-black-70 white br2"
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
