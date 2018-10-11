import React from 'react';
import { shallow, mount } from 'enzyme';
import CheckCnpj from './';
import BannerHeader from '../../components/molecules/BannerHeader';
import InputMask from 'react-input-mask';

const Page = <CheckCnpj />;
const Input = <InputMask />;

describe('Check-Cnpj Page', () => {

    it('should render without crashing', () => {
        const component = shallow(Page);
        expect(component).toMatchSnapshot();
    });

    it('should render only one banner', () => {
        const wrapper = shallow(Page);
        const banner = wrapper.find(BannerHeader);
        expect(banner.length).toBe(1);
    });

    it('should state cnpj be right', () => {
        const wrapper = shallow(Page);
        const input = wrapper.find('.teste');
        input.simulate('change', {target: {value: '43.454.362/0001-65'}});
        expect(wrapper.state().cnpj).toBe('43.454.362/0001-65');
    });

    it('should state be empty', () => {
        const wrapper = shallow(Page);
        const input = wrapper.find('.teste');
        input.simulate('change', {target: {value: ''}});
        expect(wrapper.state().cnpj).toBe('');
    });
});