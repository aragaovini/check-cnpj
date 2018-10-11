import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';

const clickFunction = jest.fn();
const ButtonComponent = <Button text="ok" clickMethod={clickFunction} />;
const ButtonComponentNoFunction = <Button type="white" text="ok" />;

describe('Button', () => {
  it('should call function correctly', () => {
    const component = shallow(ButtonComponent);
  
    component.find('.button-default').simulate('click');
    expect(clickFunction).toHaveBeenCalled();
  });

  it('should validate function correctly', () => {
    const component = shallow(ButtonComponentNoFunction);
  
    component.find('.button-default').simulate('click');
    expect(clickFunction).toHaveBeenCalled();
  });

  it('should render without crashing', () => {
      const component = shallow(ButtonComponent);
    expect(component.find('.button-default').exists()).toBe(true);
  });

  it('should render icon', () => {
    const component = mount(ButtonComponent);
  
    const arrowIcon = component.find('.material-icons');
    expect(arrowIcon.exists()).toBe(true);
  });
});