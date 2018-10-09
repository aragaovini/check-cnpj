import React from 'react';
import BannerHeader from '../../components/molecules/BannerHeader';
import Avatar from '../../assets/img/avatar.svg';

const CheckCnpj = (props) => {
    return (
        <div>
            <BannerHeader title="Nova cotação" code="#0980" image={Avatar}/>
        </div>
    );
}

export default CheckCnpj;