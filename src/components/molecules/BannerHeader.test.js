import React from 'react';
import { shallow, mount } from 'enzyme';
import BannerHeader from './BannerHeader';
import Avatar from '../../assets/img/avatar.svg';

const BannerHeaderComponent = <BannerHeader title="Nova cotação" code="#0980" image={Avatar}/>;

describe('BannerHeader', () => {

    it('should render without crashing', () => {
        const component = shallow(BannerHeaderComponent);
        expect(component).toMatchSnapshot();
    });

    it('should render the code correctly', () => {
        const wrapper = mount(BannerHeaderComponent).find('.code-container');
        expect(wrapper.text()).toEqual('#0980');
    });

    it('should render the title correctly', () => {
        const wrapper = mount(BannerHeaderComponent).find('.title-container');
        expect(wrapper.text()).toEqual('Nova cotação');
    });

    it('should render one banner', () => {
        const wrapper = shallow(BannerHeaderComponent);
        expect(wrapper.find('.banner-header').length).toBe(1);
    });
});