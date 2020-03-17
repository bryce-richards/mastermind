import React, { Component } from 'react';
import Peg from './Peg';

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
  
    };

    this.handlePaletteClick = this.handlePaletteClick.bind(this);
  }

  handlePaletteClick(color) {
    const { onPaletteClick } = this.props;
    
    onPaletteClick(color);
  }

  renderPalette() {
    let palette = [];

    for (let i = 1; i <= this.props.numColors; i++) {
      palette.push(
        <div key={i} className="col-4 mx-auto my-1">
          <Peg 
            onClick={this.handlePaletteClick} 
            color={i} 
            type="palette" />
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
          <div className="row justify-content-center">
            {this.renderPalette()}
          </div>
        </div>
      </div>
    );
  }
}