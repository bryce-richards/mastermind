import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newGameStarted } from '../actions';

import { createNewMaster, createNewBoard } from '../utils/helpers'

const mapState = ({ settings }) => ({
  numGuesses: settings.numGuesses,
  codeLength: settings.codeLength,
  numColors: settings.numColors
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
const Navbar = ({ onNewGameClick, numGuesses, codeLength, numColors }) => (
  <div>
    <nav className="navbar sticky-top navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Mastermind</span>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => onNewGameClick(numGuesses, codeLength, numColors)}>
            New Game
        </button>
      </nav>
  </div>
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