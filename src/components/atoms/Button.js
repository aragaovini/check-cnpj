import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    const { clickMethod } = this.props;
    if (clickMethod && typeof clickMethod === 'function') {
      clickMethod();
    }
  };

  render() {
    const { text } = this.props;
    return <button onClick={() => this.handleClick}>{text}</button>;
  }
}

export default Button;
