import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

const TitleComponent = <Title title="Cotação" />;

describe('Title', () => {

  it('should render without crashing', () => {
      const component = shallow(TitleComponent);
    expect(component).toMatchSnapshot();
  });

  it('should render one title', () => {
    const wrapper = shallow(TitleComponent);
    expect(wrapper.find('.title').length).toBe(1);
});
});