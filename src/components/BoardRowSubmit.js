import React from 'react';
import PropTypes from 'prop-types';


const BoardRowSubmit = props => (
  <div>
    <button 
      type="button" 
      class="btn btn-success" 
      onClick={() => props.onCodeSubmit}
      visible={props.active} />
  </div>
);

BoardRowSubmit.propTypes = {
  onCodeSubmit: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default BoardRowSubmit;