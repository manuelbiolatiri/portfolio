import React, { Component } from 'react';
import Converts from './Converter/Converter';
import Body from './Body';
import {Link} from 'react-router-dom';
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFastForward, faLock, faUserCheck, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

class Landing extends Component {
  render() {
    return (
      <div className="">
      <article>
  <header className="bg-transparent pb3 san-serif flex justify-around">
    <div className=" w-50 respo pa4 pt5-ns tl" >
      <h3 className=" fsm  fs lh-title mv0 ">
        <span className="bg-black-90 lh-copy white pa1 tracked-tight">
        The easiest way to sell cryptocurrency & Giftcards

        </span>
      </h3>
      <h4 className="f3 fw1 georgia i mb2 white">Trusted by Nigerians since 2017.</h4>
      
      <Link to="/sign_up"
                  className="no-underline f6 tc db w-100 pv3 bg-animate button  ph3 pv2 input-reset ba b--white mt4 bg-white grow pointer f6 dib black-80 br2"
                >
                  Sign up for free
      </Link>
            
    </div>
    {/* <div className="mw9 w-50"> */}
      <img src="landing.svg" className="img" style={{ height: 500, width: 500 }} alt=""
     />
      {/* </div> */}
  </header>
</article>
  <div className="bg-white">
      <Body />
     <Converts />
  </div>

  
{/* <div className="bg-dark-pink h2">
<h1 className="white center">Giftcards Rates</h1>
</div> */}
<div className=" bg-white" style={{textAlign:'center',width:'100%'}}>
    <h2 className="black-70">Chat With Us For A Flash Giftcards Transaction</h2>
  </div>
<div class="center pv5 bg-white">
  
  <main class="gridd" >
    <article>
      <img src="https://igiftcards.fr/resources/images/products/340w/amazon-340w.png" className="w-100" alt=""/>
      <div class="text">
  <p >Itunes | 200/$</p>
      </div>
    </article>
    <article>
      <img src="https://igiftcards.fr/resources/images/products/340w/amazon-340w.png" alt=""/>
      <div class="text">
  <p >Amazon | 240/$</p>
      </div>
    </article>
    <article>
      <img src="https://igiftcards.fr/resources/images/products/340w/amazon-340w.png" className="w-100" alt=""/>
      <div class="text">
  <p>Steam | 250$</p>
      </div>
    </article>
    <article>
    
      <img src="https://igiftcards.fr/resources/images/products/340w/amazon-340w.png" alt=""/>
      <div class="text">
<p>Ebay | 240/$</p>
      </div>
    </article>
  </main>
</div>
<div class="  center">
  <main class="grid">
    <article style={{margin:"12px 0"}}>
    <FontAwesomeIcon icon={faFastForward} style={{color:'white',width:'3rem',height:'3rem'}} />
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2 ">Instant Delivery</h2>
  <p >You are guaranteed to get your payment sent to your account within minutes.</p>
      </div>
    </article>
    <article style={{margin:"12px 0"}}>
    <FontAwesomeIcon icon={faLock} style={{color:'white',width:'3rem',height:'3rem'}} />
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2 ">Trusted And Secure</h2>
  <p >Trade with high confidence, as we assure you 
  the highest level of security in our system.</p>
      </div>
    </article>
    <article style={{margin:"12px 0"}}>
    <FontAwesomeIcon icon={faUserCheck} style={{color:'white',width:'3rem',height:'3rem'}}/>
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2">Verification In A Flash</h2>
  <p>Complete your account set up and start selling in minutes</p>
      </div>
    </article>
    <article style={{margin:"12px 0"}}>
    <FontAwesomeIcon icon={faQuestionCircle} style={{color:'white',width:'3rem',height:'3rem'}}/>
      <div class="white f6" style={{margin:"12px 0"}}>
      <h2 className="mb2 ">Responsive Support</h2>
<p>Round the clock customer relation team stands by to help out with anything</p>
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
              <Link to="/sign_in"
                  className="no-underline f6 tc db w-100 pv3 bg-animate bg-black-80 grow pointer hover-bg-black-70 white br2"
                >
                  Login to get referral link
                </Link>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Landing;
