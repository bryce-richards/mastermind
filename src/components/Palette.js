import React from "react";
import Peg from './Peg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { paletteSelected } from '../actions';

const mapState = ({ settings, palette }) => ({
  numColors: settings.numColors,
  activeColor: palette.activeColor
});

const mapDispatch = dispatch => {
  return {
    handlePaletteClick: color => {
      dispatch(paletteSelected(color));
    }
  }
}

const buildPalette = ({ handlePaletteClick, numColors }) => {
  const palette = [];

  for (let i = 0; i < numColors; i++) {
    palette.push(
      <Peg
        key={i}
        index={i}
        color={i + 1}
        type="palette"
        onPegClick={() => handlePaletteClick(i + 1)} />
    );
  }

  return palette;
}

const Palette = props => (
  <div className="row">
    <div className="col-12">
      <h3 style={{textAlign: "center"}}>Palette</h3>
      <div className="row">
      {  buildPalette(props) }
      </div>
    </div>
  </div>
);


Palette.propTypes = {
  handlePaletteClick: PropTypes.func.isRequired,
  numColors: PropTypes.number.isRequired
};

export default connect(
  mapState,
  mapDispatch
)(Palette);