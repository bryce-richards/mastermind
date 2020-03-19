import React from "react";
import MasterRow from './MasterRow';
import BoardRow from './BoardRow';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapState = ({ master, board }) => ({
  master, board
});

const BoardContainer = ({ master, board }) => (
  <div>
    <div>
      <MasterRow code={master} />
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