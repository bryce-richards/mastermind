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
      boardRowsArray.push(
        <div key={i+1}>
          <BoardRow codePegs={boardRows[i]} />
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