import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { demoOperations } from '../../../state/ducks/demo';
import { Counter } from '../../../components';

import './styles.css';

class DemoPage extends Component {
  render() {
    return (
      <div className="demo">
        <div className="demo-header">
          <h2>Demo Page</h2>
        </div>
        <div className="demo-intro">
          <Counter count={this.props.count}
                   increment={this.props.counterIncrement}
                   decrement={this.props.counterDecrement}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ demo }) => ({
  count: demo.count,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(demoOperations, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);
