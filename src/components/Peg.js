import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapPaletteState } from '../utils/helpers';

function mapState(state, ownProps) {
  return mapPaletteState(state, ownProps); 
}

const Peg = props => (
  <div 
    className={`col-${props.colSize}`}
    style={{color: props.colorHex[props.color]}}>
    <i 
      className={props.selected ? `fas fa-circle fa-${props.iconSize}` : `fad fa-circle fa-${props.iconSize}`}
      onClick={() => props.onPegClick()} />
  </div>
);

Peg.propTypes = {
  onPegClick: PropTypes.func,
  iconSize: PropTypes.string.isRequired,
  colSize: PropTypes.number.isRequired,
  index: PropTypes.number,
  color: PropTypes.number.isRequired
};

export default connect(
  mapState,
  null
)(Peg);