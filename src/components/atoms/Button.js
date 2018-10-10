import React, { Component } from 'react';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';

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
    const ButtonDefault = styled.button`
      ${type === "white" ? 
      "background: #fff !important; color: #a536ff;" : "background: #68d4c5; color: #fff;"};
    `;

    return (
      <ButtonDefault className="button-default" onClick={() => this.handleClick()}>
        {text}
        <FlexBlock />
        <MaterialIcon color={type === 'white' ? '#a536ff' : '#fff'} size="22" icon="arrow_forward" />
      </ButtonDefault>
    );
  }
}

export default Button;
