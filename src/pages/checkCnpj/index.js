import React, { Component } from 'react';
import BannerHeader from '../../components/molecules/BannerHeader';
import Avatar from '../../assets/img/avatar.svg';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Button from '../../components/atoms/Button';

const TitleInput = styled.h3`
    text-align: center;
    color: #000;
`;

class CheckCnpj extends Component {
    state = {
        cnpj: ''
    }

    handleChange = name => event => {
        const inputValue = event.target.value
        const noMaskCnpj = inputValue ? inputValue.replace(/[^\d]/g, '') : '';
        this.setState({
            [name]: noMaskCnpj,
        });
    };
    
    render() {
        return (
            <div>
                <BannerHeader title="Nova cotação" code="#0980" image={Avatar}/>
                <TitleInput>Buscar por CNPJ ou empresa</TitleInput>
                <div className="container-input">
                    <InputMask onChange={() => this.handleChange('cnpj')} mask="99.999.999/9999-99" maskChar=" " />
                </div>
                <Button text="Ok" clickMethod={() => {}}/>
            </div>
        );
    } 
}

export default CheckCnpj;