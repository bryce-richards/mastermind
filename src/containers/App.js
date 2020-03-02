import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import BoardContainer from './BoardContainer';
import { generateMasterCode, generateBoardRows } from '../utils/helpers';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      masterCode: [],
      boardRows: [],
      numGuesses: 12,
      codeLen: 4,
      numColors: 6,
      style: "neon",
      paletteColor: 0,
      guess: 0
    };

    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame() {
    const masterCode = generateMasterCode(this.state.codeLen, this.state.numColors);
    const boardRows = generateBoardRows(this.state.codeLen, this.state.numGuesses);
    
    this.setState({
      masterCode,
      boardRows
    });
  } 

  render() {
    return (
      <div>
        <header>
          <Navbar onNewGame={this.handleNewGame}/>
        </header>
        <main className="container-fluid">
          <BoardContainer {...this.state} />
        </main>
      </div>
    );
  }
  
}
