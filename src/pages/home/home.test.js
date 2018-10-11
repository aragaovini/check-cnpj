import React from 'react';
import { shallow } from 'enzyme';
import Home from './';

const Page = <Home />;

describe('Home Page', () => {

    it('should render without crashing', () => {
        const component = shallow(Page);
        expect(component).toMatchSnapshot();
    });

    it('should render button start', () => {
        const wrapper = shallow(Page);
        const banner = wrapper.find('#button-start');
        expect(banner.length).toBe(1);
    });
});