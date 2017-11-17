import React, { Component } from 'react';
import FacebookProvider, { ShareButton } from 'react-facebook';
import '../styles/FBShare.css';

export default class FBShare extends Component {
  render() {
    return (
      <FacebookProvider appId="1517171731651447">
        <ShareButton href="https://developers.facebook.com/docs/plugins/">Share on FaceBook</ShareButton>
      </FacebookProvider>
    );
  }
}
