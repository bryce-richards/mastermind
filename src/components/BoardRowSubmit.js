import React from 'react';
import PropTypes from 'prop-types';


const BoardRowSubmit = props => (
  <div className="col-1">
    <button 
      type="button" 
      className={`btn btn-success ${props.visible ? "visible" : "invisible"}`}
      visible={props.visible.toString()} 
      disabled={!props.enabled}
      onClick={() => props.onCodeSubmit()}>
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