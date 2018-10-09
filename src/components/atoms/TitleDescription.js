import React from 'react';
import styled from 'styled-components';

const TitleDefault = styled.h2`
    margin: 0px 0px 8px 0px;
    color: #fff;
    font-size: 16px;
`;

const TitleDescription = (props) => {
    const { title } = props;
    return <TitleDefault>{ title }</TitleDefault>;
}

export default TitleDescription;