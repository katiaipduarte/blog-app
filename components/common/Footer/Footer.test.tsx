import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import Footer from './Footer';

describe('the <Footer /> component', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
