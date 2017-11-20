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
        randomBlack = response.data.blackCards[Math.floor(Math.random()*response.data.blackCards.length)].text;
        randomWhite = response.data.whiteCards[Math.floor(Math.random()*response.data.blackCards.length)];
        if ((randomBlack.match(/_/g) || []).length > 1) {
          this.axiosRequest(e.persist());
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
        <div className="buttons">
          <button id="card-button" onClick={ this.axiosRequest }>Generate Random Cards</button>
        </div>

        <div id="cards">
          <BlackCard text={ this.state.blackCard ? this.state.blackCard : <h1 id="react-card-title">React<br />Against<br />Humanity</h1> }/>
          <WhiteCard text={ this.state.whiteCard ? this.state.whiteCard : <h1 id="react-card-title">React<br />Against<br />Humanity</h1> }/>
        </div>

        <div className="buttons">
          <FBShare />
        </div>
        <Footer />
      </div>
    );
  }
}
