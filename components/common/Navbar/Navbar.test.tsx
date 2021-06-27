/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Navbar from './Navbar';

describe('<Navbar /> component Unit Test', () => {
  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = mount(
      <Navbar
        mountedComponent={true}
        theme="light"
        themeToggler={jest.fn().mockName('mockedFunction')}
      />
    );
  });

  it('should render 1 <Navbar /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('should add active to className in ul, when clicking the faBars icon', () => {
    const toggle = component.find('.toggle');
    expect(toggle).toBeTruthy();
    expect(component.find('ul').get(0).props.className).toEqual('menu');

    toggle.find('a').at(0).simulate('click');
    expect(component.find('ul').get(0).props.className).toEqual('menu active');
  });
});
