import React from "react";
import BoardRowCode from './BoardRowCode';
import BoardRowKey from './BoardRowKey';
import BoardRowSubmit from './BoardRowGuess';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { codeSubmitted } from '../actions';
import { handleGuess } from '../utils/helpers';

function mapState(state, ownProps) {
  const { boardIndex } = ownProps;
  const { info, master, board } = state;
  const boardRow = board[boardIndex];
  const turn = info.turn;
  const active = boardRow === turn;

  return {
    master,
    boardRow,
    turn,
    active
  }
}

const mapDispatch = dispatch => {
  return {
    handleCodeSubmit: ({ master, boardRow, turn }) => {
      const boardKey = handleGuess(master, boardRow);

      dispatch(codeSubmitted(turn, boardKey));
    }
  }
}

const BoardRow = props => (
  <div>
    <div>
      <BoardRowKey />
    </div>
    <div>
      <BoardRowCode />
    </div>
    <div>
      <BoardRowSubmit onCodeSubmit={props.handleCodeSubmit} active={props.active}/>
    </div>
  </div>
);

BoardRow.propTypes = {
};

export default connect(
  mapState,
  mapDispatch
)(BoardRow);