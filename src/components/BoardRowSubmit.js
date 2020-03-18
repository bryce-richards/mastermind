import React from 'react';
import PropTypes from 'prop-types';


const BoardRowSubmit = props => (
  <div>
    <button 
      type="button" 
      className={`btn btn-success ${props.visible ? "visible" : "invisible"}`}
      onClick={() => props.onCodeSubmit}
      visible={props.visible.toString()} 
      disabled={!props.enabled}>
      Submit  
    </button>
  </div>
);

BoardRowSubmit.propTypes = {
  onCodeSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  enabled: PropTypes.bool.isRequired
};

export default BoardRowSubmit;