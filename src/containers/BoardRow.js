import React, { Component } from 'react';
import BoardRowGuess from '../components/BoardRowGuess';
import BoardRowKey from '../components/BoardRowKey';

export default class BoardRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      codePegs: [],
      keyPegs: []
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-2">
          {/* <BoardRowKey keyPegs={this.state.keyPegs} /> */}
        </div>
        <div className="col-10">
          <div className="row justify-content-center my-2">
            <BoardRowGuess codePegs={this.props.codePegs} />
          </div>
        </div>
      </div>
    );
  }
}