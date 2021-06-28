import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import CustomErrorLayout from './CustomErrorLayout';

describe('the <CustomErrorLayout /> component', () => {
  it('should render custom error layout with code and message', () => {
    const tree = renderer
      .create(<CustomErrorLayout errorCode={404} message="Unit test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
