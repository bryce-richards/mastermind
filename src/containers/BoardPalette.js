import React, { Component } from 'react';
import Peg from '../components/Peg';

export default class BoardPalette extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handlePaletteClick = this.handlePaletteClick.bind(this);
  }

  handlePaletteClick() {

  }

  renderPalette() {
    let palette = [];

    for (let i = 1; i <= this.props.numColors; i++) {
      palette.push(
        <div key={i} className="mx-auto py-1">
          <Peg onClick={this.handlePaletteClick} color={i} />
        </div>
      );
    }

    return palette;
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row justify-content-center">
            <h3 className="font-weight-light">Palette</h3>
          </div>
          <div className="row mx-auto">
            {this.renderPalette()}
          </div>
        </div>
      </div>
    );
  }
}