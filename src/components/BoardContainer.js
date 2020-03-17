import React from "react";
import BoardRow from './BoardRow';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapState = ({ board }) => ({
  board
});

const BoardContainer = ({ board }) => (
  <div>
    { board.map((row, i) => 
      <BoardRow key={i} boardRow={row} />
    )}
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