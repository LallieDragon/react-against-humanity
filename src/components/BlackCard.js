import React, { Component } from 'react';
import '../styles/BlackCard.css';

export default class BlackCard extends Component {
  render() {
    return (
      <div id="black-card">
        <p id="black-text"> { this.props.text } </p>
      </div>
    );
  }
}
