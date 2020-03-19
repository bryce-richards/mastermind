import React from "react";
import BoardRowCode from './BoardRowCode';
import BoardRowKey from './BoardRowKey';
import BoardRowSubmit from './BoardRowSubmit';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { codeSubmitted } from '../actions';
import { handleGuess } from '../utils/helpers';

function mapState(state, ownProps) {
  const boardIndex = ownProps.index;
  const { boardRow } = ownProps
  const { info, master } = state;
  const boardCode = boardRow.code; 
  const boardKey = boardRow.key;
  const turn = info.turn;

  const active = boardIndex === turn - 1;
  let enabled = active;

  for (let peg of boardCode) {
    if (peg === 0) {
      enabled = false;
    }
  }

  return {
    master,
    boardIndex,
    boardCode,
    boardKey,
    turn,
    active,
    enabled
  }
}

const mapDispatch = dispatch => {
  return {
    handleCodeSubmit: ({ master, boardIndex, boardCode, turn }) => {
      const boardKey = handleGuess(master, boardCode);
      
      dispatch(codeSubmitted(boardIndex, boardKey, turn));
    }
  }
}

const BoardRow = props => (
  <div className="row my-3 d-flex justify-content-between">
    <BoardRowKey index={props.boardIndex} code={props.boardKey}/>
    <BoardRowCode index={props.boardIndex} code={props.boardCode}/>
    <BoardRowSubmit onCodeSubmit={() => props.handleCodeSubmit(props)} visible={props.active} enabled={props.enabled}/>
  </div>
);

BoardRow.propTypes = {
  handleCodeSubmit: PropTypes.func.isRequired,
  master: PropTypes.array.isRequired,
  boardIndex: PropTypes.number.isRequired,
  boardRow: PropTypes.object.isRequired,
  boardCode: PropTypes.array.isRequired,
  boardKey: PropTypes.array.isRequired,
  turn: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
};

export default connect(
  mapState,
  mapDispatch
)(BoardRow);