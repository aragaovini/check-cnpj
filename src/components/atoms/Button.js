import React, { Component } from 'react';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';

const ButtonDefault = styled.button`
  ${props => props.type === "white" ? 
  "background-color: #a536ff; color: #fff;"
  : "background-color: #fff;; color: #a536ff"};
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
    const { text } = this.props;
    return (
      <ButtonDefault className="button-default" onClick={() => this.handleClick()}>
        {text}
        <FlexBlock />
        <MaterialIcon color="#a536ff" size="22" icon="arrow_forward" />
      </ButtonDefault>
    );
  }
}

export default Button;
