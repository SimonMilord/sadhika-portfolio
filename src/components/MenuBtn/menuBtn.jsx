import React, { Component } from 'react';
import './menuBtn.scss';

class menuBtn extends Component {
  render() {
    return (
      <button id="btn" onMouseDown={this.props.handleMouseDown} aria-label="menu button">x</button>
    );
  }
}

export default menuBtn;