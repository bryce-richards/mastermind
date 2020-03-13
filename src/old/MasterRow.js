import React, { Component } from 'react';
import BoardRowGuess from './BoardRowGuess';

export default class MasterRow extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hidden: true
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row justify-content-center">
            <h2>Master Row</h2>
          </div>
          <div className="row">
            <BoardRowGuess codePegs={this.props.masterCode} />
          </div>
        </div>
      </div>
    );
  }
}