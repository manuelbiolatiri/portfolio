import React, { Component } from 'react';
import Converts from './Converter/Converter';
import Navigation from './Navigation/Navigation';
import { Card, Button, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Body from './Body';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <section class="ph3 ph5-ns pv5">
          <article class="mw8 center br2 ba b--light-blue bg-lightest-blue">
            <div class="dt-ns dt--fixed-ns w-100">
              <div class="pa3 pa4-ns dtc-ns v-mid">
                <div>
                  <h2 class="fw4 blue mt0 mb3">This is a promo title </h2>
                  <p class="black-70 measure lh-copy mv0">
                    This is suporting copy for the wonderful promo catchphrase
                    that is going to be used.
                  </p>
                </div>
              </div>
              <div class="pa3 pa4-ns dtc-ns v-mid">
                <a
                  href="#"
                  class="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2"
                >
                  Sign up for free
                </a>
              </div>
            </div>
          </article>
        </section>
        <Body />
        <Converts />
        <section class="ph3 ph5-ns pv5">
          <article class="mw8 center br2 ba b--light-blue bg-lightest-blue">
            <div class="dt-ns dt--fixed-ns w-100">
              <div class="pa3 pa4-ns dtc-ns v-mid">
                <div>
                  {/* <h2 class="fw4 blue mt0 mb3">This is a promo title </h2> */}
                  <p class="black-70 measure lh-copy mv0">
                    Join our affiliate program and Earn 15% of Flashtoken's
                    commission on<br></br>ALL of your referral's transactions
                    including all their future transactions
                  </p>
                </div>
              </div>
              <div class="pa3 pa4-ns dtc-ns v-mid">
                <a
                  href="#"
                  class="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2"
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
