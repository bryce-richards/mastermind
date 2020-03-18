import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { themes } from '../utils/constants';

const pegIconSize = {
  key: "xs",
  palette: "2x",
  display: "3x",
  code: "3x",
  master: "4x"
}

function mapState(state, ownProps) {
  const { type, color } = ownProps;
  const index = ownProps.index;
  const size = pegIconSize[type];

  const { 
    palette: {
      theme
    } 
  } = state;

  const themeHex = themes[theme];

  return {
    type,
    size,
    index,
    color,
    themeHex
  }
}


const Peg = props => (
  <div style={{color: props.themeHex[props.color]}}>
    <i 
      className={`fad fa-circle fa-${props.size}`}
      onClick={() => props.onPegClick()} />
  </div>
);

Peg.propTypes = {
  onPegClick: PropTypes.func,
  size: PropTypes.string.isRequired,
  index: PropTypes.number,
  color: PropTypes.number.isRequired
};

export default connect(
  mapState,
  null
)(Peg);