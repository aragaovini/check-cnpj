import React from 'react';
import styled from 'styled-components';

const TitleDefault = styled.h1`
    margin: 0px 0px 28px 0px;
    color: #fff;
    font-size: 24px;
`;

const Title = (props) => {
    const { title } = props;
    return <TitleDefault>{ title }</TitleDefault>;
}

export default Title;