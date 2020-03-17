import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { boardSelected, paletteSelected } from '../actions';
import { themes } from '../utils/constants';

const pegIconSize = {
  key: "xs",
  palette: "2x",
  guess: "3x"
}

function mapState(state, ownProps) {
  const { boardIndex, pegType, pegIndex, pegColor } = ownProps;
  const pegSize = pegIconSize[pegType];

  const { 
    palette: {
      theme, 
      activeColor, 
    } 
  } = state;

  const themeHex = themes[theme];

  return {
    boardIndex,
    pegType,
    pegSize,
    pegIndex,
    pegColor,
    themeHex,
    activeColor
  }
}

const mapDispatch = dispatch => {
  return {
    onPegClick: ({ boardIndex, pegType, pegIndex, pegColor, activeColor }) => {
      if (pegType === "board" && activeColor > 0) { 
        dispatch(boardSelected(boardIndex, pegIndex, activeColor));
      }

      if (pegType === "palette") {
        dispatch(paletteSelected(pegColor));
      }
    }
  }
}

const Peg = props => (
  <div style={{color: props.themeHex[props.pegColor]}}>
    <i 
      className={`fad fa-circle fa-${props.pegSize}`}
      onClick={() => props.onPegclick({...props})} />
  </div>
);

Peg.propTypes = {
  onPegClick: PropTypes.func,
  boardIndex: PropTypes.number,
  pegSize: PropTypes.string.isRequired,
  pegIndex: PropTypes.number,
  pegColor: PropTypes.number.isRequired,
  aciveColor: PropTypes.number.isRequired
};

export default connect(
  mapState,
  mapDispatch
)(Peg);