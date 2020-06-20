import React, { Component } from 'react';
import './Crypto.css';
import axios from 'axios';
import NumberFormat from "react-number-format";


class Crypto extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }
// http://blockchain.info/stats?format=json
  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
        console.log(this.state.cryptos)
      })
  }

  render() {
    return (
        <div className="App">
          <div id="crypto-container">
          {Object.keys(this.state.cryptos).map((item, i) => (
            <span className="left" key={i}><NumberFormat value={this.state.cryptos.BTC.USD} displayType={'text'} 
            decimalprecision={2} thousandseparator={toString()} prefix={'$'} /></span>
            ))}
            <span className="right">{Object.keys(this.state.cryptos)[0]}</span>
          </div>
        </div>
        
    )
  }
}
export default Crypto;
