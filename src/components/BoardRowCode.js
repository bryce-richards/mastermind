import React from "react";
import Peg from './Peg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { boardSelected } from '../actions';

function mapState(state, ownProps) {
  const { palette } = state;
  const { activeColor } = palette;
  const { code } = ownProps; 
  const boardIndex = ownProps.index;
  return {
    boardIndex,
    code,
    activeColor
  }
}

const mapDispatch = dispatch => {
  return {
    handlePegClick: (boardIndex, pegIndex, activeColor) => {
      dispatch(boardSelected(boardIndex, pegIndex, activeColor));
    }
  }
}

const BoardRowCode = ({ handlePegClick, boardIndex, code, activeColor }) => (
  <div className="col-6">
    <div className="row">
      { code.map((color, i) => 
        <Peg 
          key={i} 
          index={i}
          color={color} 
          type="code" 
          onPegClick={() => handlePegClick(boardIndex, i, activeColor)}/>
      )}
    </div>
  </div>
);

BoardRowCode.propTypes = {
  index: PropTypes.number.isRequired,
  code: PropTypes.array.isRequired
};

export default connect(
  mapState,
  mapDispatch
)(BoardRowCode);