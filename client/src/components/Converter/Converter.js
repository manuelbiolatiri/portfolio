import React from 'react';
import { Link } from 'react-router-dom';
import './Converter.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Convert from '../Convert/Convert'

class Converts extends React.Component {
  constructor(props) {
    super(props);
    this.BASE_URL = 'https://api.cryptonator.com/api/ticker/';
    // fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
    this.chartRef = null;
    this.state = {
      currencies: ['BTC', 'ETH', 'LTC'],
      base: 'USD',
      amount: '',
      convertTo: 'BTC',
      result: '',
      btcusd: '-',
      ltcusd: '-',
      ethusd: '-',
      errorMessage: ''
      // currbtc: '-',
      // currusd: '-',
      // currusd: '-'
    };
  }

  showError = (props) => {
    this.setState({ errorMessage: 'You must be logged in to sell bitcoins' });
    let customId = "custom-id-yes";
    toast.warn('You must be logged in to sell bitcoins', {
      toastId: customId,
      position: toast.POSITION.TOP_CENTER
    });
  }

  getDataFor(conversion, prop) {
    fetch(this.BASE_URL + conversion)
      .then((res) => res.json())
      .then((d) => {
        if (prop === 'btcusd') {
          this.setState({
            initValue: d.ticker.price
          });
        }

        this.setState({
          [prop]: d.ticker.price
        });
      });
  }

  calculate = (props) => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      const result = (this.state.btcusd * amount).toFixed(2);
      console.log(result);
      localStorage.setItem('usdamount', JSON.stringify(result));
      localStorage.setItem('btcamount', JSON.stringify(this.state.amount));
      this.setState({
        result
      });
    }
  };

  handleSelect = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = (e) => {
    this.setState(
      {
        amount: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  componentDidMount() {
    this.getDataFor('btc-usd', 'btcusd');
    this.getDataFor('usd-ltc', 'ethusd');
    this.getDataFor('usd-eth', 'ltcusd');
    // this.getCurrencyFor('usd-eth', 'currusd');
    // this.getCurrencyFor('usd-eth', 'currusd');
    // this.getCurrencyFor('usd-eth', 'currusd');
  }

  render() {
    const { currencies, amount, result, base, convertTo, btcusd } = this.state;
    let token = localStorage.jwt;
    return (
      <div className=" text-center m-auto">
{this.state.errorMessage ? <ToastContainer position= "top-right"

hideProgressBar= {false}
closeOnClick= {true}
pauseOnHover= {true}
draggable= {true}
progress= {undefined}/> : ''}
        <form className="">
        <div className="mb4 " style={{padding:'0 10px'}}>
          <div className="mb4 mb0-ns ">
              <input
                type="number"
                value={amount}
                onChange={this.handleInput}
                className="mw-100 w5-ns f5 input-reset ba b--black-20 pv3 ph2 border-box"
              />
              <input
                type="submit"
                value="BTC"
                // style={{lineHeight: 1.15}}
                className="input-reset w-auto-ns bg-black-80 white f5 pv2 pv3-ns lhyt ph3 ba b--black-80 bg-hover-mid-gray"
              />
            </div>
            </div>
        </form>

        <form className="">
        <div className=" " style={{padding:'0 10px'}}>
        <div className="mb2 mb0-ns ">
              <input
              type="number"
                disabled={true}
                value={
                  amount === ''
                    ? '0'
                    : result === null
                    ? 'Calculating...'
                    : result
                }
                className="mw-100 w5-ns f5 input-reset ba b--black-20 pv3 ph2 border-box"
              />
              <input
                type="submit"
                value="USD"
                // style={{lineHeight: 1.15}}
                className="input-reset w-auto-ns bg-black-80 white f5 lhyt pv2 pv3-ns ph3 ba b--black-80 bg-hover-mid-gray"
              />
            </div>
            </div>
        </form>
        {token ?
          <Link to="/confirmsell">
          <button type="button"  style={{lineHeight: 1.15}} className=" button b ph3 pv2 input-reset ba white mt2 mb3 bg-black-80 grow pointer f5 dib ">
            Sell
          </button>
        </Link>
        : 
        <button onClick={this.showError} type="button" style={{lineHeight: 1.15}} className=" button b ph3 pv2 input-reset ba white mt2 mb3 bg-black-80 grow pointer f5 dib ">
          Sell
        </button>
        }
        
      </div>
    );
  }
}

export default Converts;
