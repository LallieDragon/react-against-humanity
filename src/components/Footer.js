import React, { Component } from 'react';
import '../styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <h1>Made with  <span role="img" aria-label="laughing emoji" id="smiley" href="#">😂</span>  by <a id="github" href='https://github.com/LallieDragon'>LallieDragon</a></h1>
      </div>
    );
  }
}
