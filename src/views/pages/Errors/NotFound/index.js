import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routeTo } from '../../../../utils';

import './styles.css';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="error">
        <div className="error-header">
          <h1>404 Not Found</h1>
        </div>
        <div className="error-intro">
          URL path <strong><code>{this.props.location.pathname}</code></strong> does not exists!
        </div>
        <br/>
        <Link to={routeTo('home')}>Go to Homepage</Link>
      </div>
    );
  }
}

export default NotFoundPage;
