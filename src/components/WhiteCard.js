import React, { Component } from 'react';
import '../styles/WhiteCard.css';

export default class WhiteCard extends Component {
  render() {
    return (
      <div id="white-card">
        <h1 id="white-text"> { this.props.text } </h1>
      </div>
    );
  }
}

