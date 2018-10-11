import React from 'react';
import { shallow, mount } from 'enzyme';
import TitleDescription from './TitleDescription';

const TitleDescriptionComponent = <TitleDescription title="Cotação" />;

describe('TitleDescription', () => {

  it('should render without crashing', () => {
      const component = shallow(TitleDescriptionComponent);
    expect(component).toMatchSnapshot();
  });

    it('should render the title correctly', () => {
        const wrapper = mount(TitleDescriptionComponent);
        expect(wrapper.text()).toEqual('Cotação');
    });
});