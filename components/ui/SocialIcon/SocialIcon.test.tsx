import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';

describe('the <SocialIcon /> component', () => {
  it('should not render <SocialIcon /> because of lack of href', () => {
    const tree = renderer.create(<SocialIcon icon={faGithub} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render <SocialIcon /> because of href been empty', () => {
    const tree = renderer
      .create(<SocialIcon icon={faGithub} href="" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render <SocialIcon /> correctly', () => {
    const tree = renderer
      .create(<SocialIcon icon={faGithub} href="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
