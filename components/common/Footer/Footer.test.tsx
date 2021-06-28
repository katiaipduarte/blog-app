import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('the <Footer /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
