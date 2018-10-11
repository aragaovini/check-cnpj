import React from 'react';
import Title from '../../components/atoms/Title';
import Button from '../../components/atoms/Button';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';

const AppFrame = styled.div`
    width: 100%;
    flex-direction: column;
    padding: 28px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
`;

const BackgroundContainer = styled.div`
    display: flex;
    background: rgba(165,54,255,1);
    height: 100vh;
    background: -moz-linear-gradient(top, rgba(165,54,255,1) 0%, rgba(116,5,216,1) 90%, rgba(110,0,212,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(165,54,255,1)), color-stop(90%, rgba(116,5,216,1)), color-stop(100%, rgba(110,0,212,1)));
`;

const FlexBlock = () => {
    return <span style={{flex: 1}}/>;
}

const start = ({history}) => {
    history.push("/check-cnpj");
}

const Home = (props) => {
    return (
        <BackgroundContainer>
            <AppFrame>
                <FlexBlock/>
                <div className="icon-start-screen">
                    <MaterialIcon color="#fff" size="40" icon="trending_up" />
                </div>
                <Title title="Cotação de seguros" />
                <p className="title-description">Solução inovadora a líder de mercado</p>
                <div className="container-buttons">
                    <Button id="button-start" type="white" text="Iniciar" clickMethod={() => start(props)} />
                </div>
            </AppFrame>
        </BackgroundContainer>
    );
}

export default Home;