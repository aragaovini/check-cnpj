import React, { Component } from 'react';
import BannerHeader from '../../components/molecules/BannerHeader';
import Avatar from '../../assets/img/avatar.svg';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Button from '../../components/atoms/Button';
import CotacaoSeguroService from '../../service/api';
import CnpjValidate from '../../util/CnpjValidate';
import MaterialIcon from 'material-icons-react';

const TitleInput = styled.h3`
    text-align: center;
    color: #000;
    background: #f7f7f7;
    padding: 28px;
    margin: 0px;
`;

const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    padding: 28px;
    position: relative;
    align-items: center;
`;

const AppFrame = styled.div`
    flex-direction: column;
    height: 100vh;
    display: flex;
    box-sizing: border-box;
`;

const FlexBlock = () => {
    return <span style={{flex: 1}}/>;
}

class CheckCnpj extends Component {
    state = {
        cnpj: '',
        noMaskCnpj: '',
        isCnpjValid: false
    }

    getCleanCnpj = (cnpj) => {
        return cnpj ? cnpj.replace(/[^\d]/g, '') : ''
    }

    handleChange = event => {
        const cnpj = event.target.value
        const noMaskCnpj = this.getCleanCnpj(cnpj);
        const isCnpjValid = CnpjValidate(noMaskCnpj);
        this.setState({
            cnpj,
            noMaskCnpj,
            isCnpjValid
        });
    };

    async checkCnpj() {
        const info = await CotacaoSeguroService.getInfo(this.state.noMaskCnpj);
        alert(info);
    }
    
    render() {
        return (
            <AppFrame>
                <BannerHeader title="Nova cotação" code="#0980" image={Avatar}/>
                <TitleInput>Buscar por CNPJ ou empresa</TitleInput>
                <ContainerInput className="container-input">
                    <div className="text-field">
                        <label>CNPJ / Empresa</label>
                        <InputMask className="cnpj-input" value={this.state.cnpj} onChange={this.handleChange} mask="99.999.999/9999-99" maskChar=" " />
                    </div>
                    <div classname="checked-cnpj">
                        { this.state.isCnpjValid && 
                        <MaterialIcon color="green" size="18" icon='check' />
                    }
                    </div>
                </ContainerInput>
                <FlexBlock/>
                <div className="container-buttons">
                    <Button text="Ok" clickMethod={() => this.checkCnpj()}/>
                </div>
            </AppFrame>
        );
    } 
}

export default CheckCnpj;