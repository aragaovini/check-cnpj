import React, { Component } from 'react';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';

const WhiteButton = styled.button`
  background-color: #fff;
  color: #a536ff;
`;

const PurpleButton = styled.button`
  background-color: #a536ff;
  color: #fff;
`;

const FlexBlock = () => {
    return <span style={{flex: 1}}/>
}

class Button extends Component {
  handleClick = () => {
    const { clickMethod } = this.props;
    if (clickMethod && typeof clickMethod === 'function') {
      clickMethod();
    }
  };

  render() {
    const { text, type } = this.props;
    if (type === 'white') {
      return (
        <WhiteButton className="button-default" onClick={() => this.handleClick()}>
          {text}
          <FlexBlock />
          <MaterialIcon color="#a536ff" size="22" icon="arrow_forward" />
        </WhiteButton>
      );
    } else {
      return (
        <PurpleButton className="button-default" onClick={() => this.handleClick()}>
          {text}
          <FlexBlock />
          <MaterialIcon color="#a536ff" size="22" icon="arrow_forward" />
        </PurpleButton>
      );
    }
  }
}

export default Button;
