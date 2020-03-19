import React from "react";
import Peg from './Peg';
import PropTypes from 'prop-types';

const BoardRowKey = ({ code }) => (
  <div className="col-2">
    <div className="row">
      { code.map((color, i) => 
        <Peg 
          key={i}
          color={color} 
          type="key" />
      )}
    </div>
  </div>
);

BoardRowKey.propTypes = {
  code: PropTypes.array.isRequired
};

export default BoardRowKey;