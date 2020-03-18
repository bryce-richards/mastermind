import React from "react";
import Peg from './Peg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapState = ({ master }) => ({
  master
});

const MasterRow = ({ master }) => (
  <div>
  { master.map((color, i) => 
      <Peg 
        key={i} 
        index={i}
        color={color} 
        type="master" />
    )}
  </div>
);


MasterRow.propTypes = {
  master: PropTypes.array.isRequired
};

export default connect(
  mapState,
  null
)(MasterRow);