import React, { Component } from 'react';
import axios from 'axios';
import './styles/reset.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import BlackCard from './components/BlackCard';
import WhiteCard from './components/WhiteCard';
import FBShare from './components/FBShare';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackCard: null,
      whiteCard: null
    }
    this.axiosRequest = this.axiosRequest.bind(this);
  }

  axiosRequest(e) {
    e.preventDefault();
    var randomBlack = '';
    var randomWhite = '';
    var url = 'https://jaydata.herokuapp.com/cah';
    axios.get(url)
      .then((response) => {
        console.log(response);
        let count = 0;
        randomBlack = response.data.blackCards[Math.floor(Math.random()*response.data.blackCards.length)].text;
        randomWhite = response.data.whiteCards[Math.floor(Math.random()*response.data.blackCards.length)];
        if ((randomBlack.match(/_/g) || []).length > 1) {
          this.axiosRequest(e);
        }
        this.setState({
          blackCard: randomBlack,
          whiteCard: randomWhite
         })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div id="home">
        <Header />
        <div id="cards">
          <BlackCard text={ this.state.blackCard }/>
          <WhiteCard text={ this.state.whiteCard }/>
        </div>
        <div id="new-cards-button">
          <button onClick={ this.axiosRequest }>Generate New Cards</button>
        </div>
        <div id="share">
          <FBShare />
        </div>
        <Footer />
      </div>
    );
  }
}
