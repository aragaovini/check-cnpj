import React, { Component } from 'react';
import BannerHeader from '../../components/molecules/BannerHeader';
import Avatar from '../../assets/img/avatar.svg';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Button from '../../components/atoms/Button';
import CotacaoSeguroService from '../../service/api';

const TitleInput = styled.h3`
    text-align: center;
    color: #000;
`;

class CheckCnpj extends Component {
    state = {
        cnpj: '',
        noMaskCnpj: ''
    }

    handleChange = event => {
        const cnpj = event.target.value
        const noMaskCnpj = cnpj ? cnpj.replace(/[^\d]/g, '') : '';
        this.setState({
            cnpj,
            noMaskCnpj,
        });
    };

    async checkCnpj() {
        const info = await CotacaoSeguroService.getInfo(this.state.noMaskCnpj);
        alert(info);
    }
    
    render() {
        return (
            <div>
                <BannerHeader title="Nova cotação" code="#0980" image={Avatar}/>
                <TitleInput>Buscar por CNPJ ou empresa</TitleInput>
                <div className="container-input">
                    <InputMask className="cnpj-input" value={this.state.cnpj} onChange={this.handleChange} mask="99.999.999/9999-99" maskChar=" " />
                </div>
                <Button text="Ok" clickMethod={() => this.checkCnpj()}/>
            </div>
        );
    } 
}

export default CheckCnpj;