import React from "react";
import MasterRow from './MasterRow';
import BoardRow from './BoardRow';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapState = ({ master, board, info }) => ({
  master, 
  board, 
  turn: info.turn,
  hidden: !info.gameOver
});

const buildRows = (board, turn) => {
  const rows = [];

  for (let i = board.length - 1; i >= 0; i--) {
    if (i < turn) {
      rows.push(
        <BoardRow key={i} index={i} boardRow={board[i]} />
      );
    }
  }

  return rows;
}

const BoardContainer = ({ master, board, hidden, turn }) => (
  <div className="row">
    <div className="col-6 offset-2">
      <MasterRow code={master} hidden={hidden}/>
    </div>  
    <div className="col-6 offset-2">
      { 
        buildRows(board, turn)
      }
    </div>
  </div>
);

BoardContainer.propTypes = {
  board: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.arrayOf.isRequired,
    key: PropTypes.arrayOf.isRequired
  }).isRequired)
};

export default connect(
  mapState,
  null
)(BoardContainer);