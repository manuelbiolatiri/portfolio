import React from 'react';
import Tilt from 'react-tilt';
// import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <header className=" black-80 bg-gold tc pv4 avenir">
      <a href="/" className=" dib pa3  h2 br-100">
        <Tilt
          className="Tilt br2 shadow-2"
          options={{ max: 25 }}
          style={{ height: 60, width: 60 }}
        >
          <div className="Tilt-inner">
            <img src="flashtokenlogo.jpg" alt="" />
          </div>
        </Tilt>
      </a>
      {/* <h1 className="mt2 mb0 baskerville i fw1 f1">Title</h1> */}
      <h2 className="mt2 mb0 f6 fw4 ttu tracked">Sell with rest of mind</h2>
      <nav className="bt bb tc mw7 center mt4">
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
          href="/"
        >
          Sell
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
          href="/sign_in"
        >
          Log in
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
          href="/sign_up"
        >
          Register
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
          href="/dashboard"
        >
          Dashboard
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
          href="/contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Nav;
