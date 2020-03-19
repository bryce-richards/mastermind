import React from "react";
import Peg from './Peg';
import PropTypes from 'prop-types';

const BoardRowKey = ({ code }) => (
  <div>
    { code.map((color, i) => 
      <Peg 
        key={i}
        color={color} 
        type="key" />
    )}
  </div>
);

BoardRowKey.propTypes = {
  code: PropTypes.array.isRequired
};

export default BoardRowKey;