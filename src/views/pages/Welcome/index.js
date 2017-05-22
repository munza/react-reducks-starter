import React, { Component } from 'react';

import logo from './assets/img/logo.svg';
import './styles.css';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="welcome-header">
          <img src={logo} className="welcome-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="welcome-intro">
          To get started, edit <code>src/welcome.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Welcome;
