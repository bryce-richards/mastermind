import React, { Component } from 'react';
import { pegColors } from '../utils/constants';

export default class Peg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: "neon",
      color: 0
    };
  }

  render() {
    return (
      <div style={{color: pegColors[this.state.style][this.props.color]}}>
        <i className="fad fa-circle fa-3x" />
      </div>
    );
  }
}