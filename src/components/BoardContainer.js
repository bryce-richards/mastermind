import React, { Component } from 'react';
import BoardRowsContainer from './BoardRowsContainer';
import BoardPalette from './Palette';
import MasterRow from './MasterRow';

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: 0
    };

    this.handlePaletteClick = this.handlePaletteClick.bind(this);
  }

  handlePaletteClick(selectedColor) {
    this.setState({
      selectedColor
    });
  }


  render() {
    return (
      <div className="row" style={{marginTop: "24px"}}>
        <div className="col-2 offset-1 ">
          <BoardPalette 
            {...this.props} 
            onPaletteClick={this.handlePaletteClick()} />
        </div>
        <div className="col-6 offset-1">
          <div className="row">
            <div className="col-8 offset-2">
              <MasterRow {...this.props} />
            </div>
          </div>
          <div className="row" style={{marginTop: "24px"}}>
            <div className="col">
              <BoardRowsContainer 
                {...this.props} 
                selectedColor={this.state.selectedColor}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}