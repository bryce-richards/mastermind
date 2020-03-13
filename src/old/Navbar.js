import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onNewGame } = this.props;
    onNewGame();
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Mastermind</span>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={this.handleClick}>New Game</button>
      </nav>
    )
  }
}