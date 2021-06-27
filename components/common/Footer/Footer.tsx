import React from 'react';
import Link from 'next/link';

import SocialIcon from '@components/ui/SocialIcon/SocialIcon';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FooterContainer } from './Footer.style';

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="social-icons">
          <SocialIcon href="https://github.com/katiaipduarte" icon={faGithub} />
          <SocialIcon
            href="https://www.linkedin.com/in/katiaipduarte/"
            icon={faLinkedin}
          />
        </div>
        <div className="general-information">
          <p tabIndex={0} aria-label="Made By Katia Duarte" role="text">
            Katia Duarte
          </p>
          <p>{` • `}</p>
          <p tabIndex={0} role="text">{`© ${new Date().getFullYear()}`}</p>
          <p>{` • `}</p>
          <Link href="/">Blog App</Link>
        </div>
        <div className="github-project-info">
          <Link href="https://github.com/katiaipduarte/blog-app">
            Next.js Blog App
          </Link>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
