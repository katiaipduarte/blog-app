import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import LayoutWrapper from './LayoutWrapper';

describe('the <LayoutWrapper /> component', () => {
  it('should render layout without theme', () => {
    const tree = renderer
      .create(
        <LayoutWrapper
          themeToggler={jest.fn().mockName('mockedFunction')}
          mountedComponent={false}
          theme="light"
        >
          <p>test</p>
        </LayoutWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render layout with light theme correctly', () => {
    const tree = renderer
      .create(
        <LayoutWrapper
          themeToggler={jest.fn().mockName('mockedFunction')}
          mountedComponent={true}
          theme="light"
        >
          <p>test</p>
        </LayoutWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render layout with  dark theme correctly', () => {
    const tree = renderer
      .create(
        <LayoutWrapper
          themeToggler={jest.fn().mockName('mockedFunction')}
          mountedComponent={true}
          theme="darks"
        >
          <p>test</p>
        </LayoutWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
