import React from "react";
import Palette from './Palette';
import BoardContainer from './BoardContainer.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapState = ({ info }) => ({
  active: info.active
})

const MainSection = ({ active }) => (
  <div className="row" style={{marginTop: "24px"}}>
    <div className="col-2">
      <Palette />
    </div>
    <div className="col-10">
      {
        active ? <BoardContainer /> : null
      }
    </div>
  </div>
);

MainSection.propTypes = {
  active: PropTypes.bool.isRequired
}

export default connect(
  mapState,
  null
)(MainSection);