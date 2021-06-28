import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import ListLayout from './ListLayout';

describe('the <ListLayout /> component', () => {
  it('should render post list layout for homepage', () => {
    const tree = renderer.create(<ListLayout homepage={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render post list layout for blog page', () => {
    const tree = renderer.create(<ListLayout homepage={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
