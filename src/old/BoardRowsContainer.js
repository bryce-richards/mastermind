import React, { Component } from 'react';
import BoardRow from './BoardRow';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.buildBoardRows = this.buildBoardRows.bind(this);
  }

  buildBoardRows() {
    const { boardRows } = this.props;
    const boardRowsArray = [];

    for (let i = 0; i < boardRows.length; i++) {
      console.log("boardRow: ", boardRows[i]);
      boardRowsArray.push(
        <div className="row" key={i+1}>
          <BoardRow codePegs={boardRows[i].codePegs} keyPegs={boardRows[i].keyPegs}/>
        </div>
      );
    }

    return boardRowsArray;
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          {this.buildBoardRows()}
        </div>
      </div>
    );
  }
}