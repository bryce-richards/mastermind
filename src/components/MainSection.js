import React from "react";
import Palette from './Palette';
import BoardContainer from './BoardContainer.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapState = ({ info }) => ({
  active: info.active
})

const MainSection = ({ active }) => (
  <div className="row">
    <div className="col-4">
      <Palette />
    </div>
    <div className="col-8">
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