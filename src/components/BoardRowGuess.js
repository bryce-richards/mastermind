import React, { Component } from 'react';
import Peg from './Peg';

export default class BoardRowGuess extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  buildRows() {
    const { codePegs } = this.props;

    return codePegs.map((peg, i) => {
      return (
        <div key={i+1} className="mx-2">
          <Peg color={peg} type="guess"/>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="row mx-auto">
        {this.buildRows()}
      </div>
    );
  }
}