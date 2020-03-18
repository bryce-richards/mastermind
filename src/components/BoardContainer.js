import React from "react";
import MasterRow from './MasterRow';
import BoardRow from './BoardRow';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapState = ({ board }) => ({
  board
});

const BoardContainer = ({ board }) => (
  <div>
    <div>
      <MasterRow />
    </div>  
    <div>
      { board.map((row, i) => 
        <BoardRow key={i} index={i} boardRow={row} />
      )}
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