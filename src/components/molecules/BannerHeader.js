import React from 'react';
import styled from 'styled-components';
import TitleDescription from '../atoms/TitleDescription';
import MaterialIcon from 'material-icons-react';

const BackgroundContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 12px;
    background: rgba(165,54,255,1);
    background: -moz-linear-gradient(top, rgba(165,54,255,1) 0%, rgba(116,5,216,1) 90%, rgba(110,0,212,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(165,54,255,1)), color-stop(90%, rgba(116,5,216,1)), color-stop(100%, rgba(110,0,212,1)));
`;

const AvatarImage = styled.img`
    width: 64px;
`;

const IconContainer = styled.div`
    margin: 18px;
`;

const FlexBlock = () => {
    return <span style={{flex: 1}}/>;
}

const BannerHeader = (props) => {
    const { title, code, image } = props;
    return (
        <BackgroundContainer className="banner-header">
            <IconContainer>
                <MaterialIcon color="#fff" size="40" icon="trending_up" />
            </IconContainer>
            <div>
                <TitleDescription className="title-container" title={title} />
                <div className="code-container">{code}</div>
            </div>
            <FlexBlock />
            <AvatarImage src={image} alt="avatar-profile" />
        </BackgroundContainer>
    );
}

export default BannerHeader;