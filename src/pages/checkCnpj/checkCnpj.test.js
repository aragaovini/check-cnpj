import React from 'react';
import { shallow } from 'enzyme';
import CheckCnpj from './';
import BannerHeader from '../../components/molecules/BannerHeader';

const Page = <CheckCnpj />;

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
        const input = wrapper.find('.cnpj-input');
        input.simulate('change', {target: {value: '43.454.362/0001-65'}});
        expect(wrapper.state().cnpj).toBe('43.454.362/0001-65');
    });

    it('should state be empty', () => {
        const wrapper = shallow(Page);
        const input = wrapper.find('.cnpj-input');
        input.simulate('change', {target: {value: ''}});
        expect(wrapper.state().cnpj).toBe('');
    });
});