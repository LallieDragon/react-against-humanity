import React, { Component } from 'react';
import '../styles/WhiteCard.css';

export default class WhiteCard extends Component {
  render() {
    return (
      <div id="white-card">
        <p id="white-text"> { this.props.text } </p>
      </div>
    );
  }
}

