import React from "react";
import Peg from './Peg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BoardRowCode = props => (
  <div>
    <h1>Hello, {props.name}</h1>
  </div>
);


export default BoardRowCode;