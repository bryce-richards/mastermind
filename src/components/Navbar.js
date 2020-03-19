import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newGameStarted } from '../actions';

import { createNewMaster, createNewBoard } from '../utils/helpers';

const mapState = ({ settings, info }) => ({
  numGuesses: settings.numGuesses,
  codeLength: settings.codeLength,
  numColors: settings.numColors,
  win: info.win,
  gameOver: info.gameOver
});

const mapDispatch = dispatch => {
  return {
    onNewGameClick: (numGuesses, codeLength, numColors) => {
      const master = createNewMaster(codeLength, numColors);
      const board = createNewBoard(codeLength, numGuesses);
      
      dispatch(newGameStarted(master, board));
    }
  }
}

const Navbar = ({ onNewGameClick, numGuesses, codeLength, numColors, win, gameOver }) => (
    <nav className="row navbar navbar-dark bg-dark">
      <div className="col-2">
        <span className="row navbar-brand mb-0 h1">Mastermind</span>
      </div>
      <div className="col-8">
        <div className="row d-flex justify-content-center">
          <h2>
            {
              win ? "You Won!" : gameOver ? "You Lost" : ""
            }
          </h2>
        </div>
      </div>
      <div className="col-2">
        <button 
          type="button" 
          className="row btn btn-primary"
          onClick={() => onNewGameClick(numGuesses, codeLength, numColors)}>
            New Game
        </button>
      </div>
    </nav>
);

Navbar.propTypes = {
  onNewGameClick: PropTypes.func.isRequired,
  numGuesses: PropTypes.number.isRequired,
  codeLength: PropTypes.number.isRequired,
  numColors: PropTypes.number.isRequired
};

export default connect(
  mapState,
  mapDispatch
)(Navbar);