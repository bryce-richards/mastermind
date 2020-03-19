import React from "react";
import Peg from './Peg';
import PropTypes from 'prop-types';

const MasterRow = ({ code }) => (
  <div>
  { code.map((color, i) => 
      <Peg 
        key={i} 
        index={i}
        color={color} 
        type="master" />
    )}
  </div>
);

MasterRow.propTypes = {
  code: PropTypes.array.isRequired
};

export default MasterRow;