import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import ThemeSwitcher from './ThemeSwitcher';

describe('the <ThemeSwitcher /> component', () => {
  it('should render light theme correctly', () => {
    const tree = renderer
      .create(
        <ThemeSwitcher
          theme="light"
          toggleTheme={jest.fn().mockName('mockedFunction')}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render dark theme correctly', () => {
    const tree = renderer
      .create(
        <ThemeSwitcher
          theme="dark"
          toggleTheme={jest.fn().mockName('mockedFunction')}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
