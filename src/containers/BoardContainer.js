import React, { Component } from 'react';
import BoardRowsContainer from './BoardRowsContainer';
import BoardPalette from './BoardPalette';
import MasterRow from './MasterRow';

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div className="row" style={{marginTop: "24px"}}>
        <div className="col-2 offset-1 ">
          <BoardPalette {...this.props} />
        </div>
        <div className="col-6 offset-1">
          <div className="row">
            <div className="col-8 offset-2">
              <MasterRow {...this.props} />
            </div>
          </div>
          <div className="row" style={{marginTop: "24px"}}>
            <div className="col">
              <BoardRowsContainer {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}