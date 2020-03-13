import React, { Component } from 'react';

export default class GuessSubmitButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="col">
        <button 
          type="button" 
          class="btn btn-success" 
          active={this.props.active}>Submit</button>
      </div>
    );
  }
}