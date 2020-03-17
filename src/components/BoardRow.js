import React, { Component } from 'react';
import BoardRowGuess from './BoardRowGuess';
import BoardRowKey from './BoardRowKey';
import GuessSubmitButton from './GuessSubmitButton';
import { handleGuess } from '../utils/helpers';

export default class BoardRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.handleGuess = this.handleGuess.bind(this);
  }
  
  handleGuess() {

  }

  render() {
    return (
      <div className="col">
        <div className="row">
          <div className="col-2">
            <BoardRowKey keyPegs={this.props.keyPegs} />
          </div>
          <div className="col-8">
            <div className="row justify-content-center my-2">
              <BoardRowGuess codePegs={this.props.codePegs} />
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <GuessSubmitButton active={this.state.active}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}