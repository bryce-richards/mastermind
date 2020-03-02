import React, { Component } from 'react';
import Peg from './Peg';

export default class BoardRowGuess extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  buildRows(codePegs) {
    return codePegs.map((peg, i) => {
      return (
        <div key={i+1} className="mx-2">
          <Peg color={peg} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="row mx-auto">
        {this.buildRows(this.props.codePegs)}
      </div>
    );
  }
}