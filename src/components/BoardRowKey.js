import React, { Component } from 'react';
import Peg from './Peg';

export default class BoardRowKey extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  buildRows() {
    const { keyPegs } = this.props;

    return keyPegs.map((peg, i) => {
      return (
        <div key={i+1} className="col-6">
          <Peg color={peg} type="key" />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="row">
        {this.buildRows()}
      </div>
    );
  }
}