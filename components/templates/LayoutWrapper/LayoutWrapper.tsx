import React from 'react';
import { SectionContainer } from './LayoutWrapper.style';

import Navbar from '@components/common/Navbar/Navbar';
import Footer from '@components/common/Footer/Footer';

type Props = {
  children: JSX.Element;
  mountedComponent: boolean;
  themeToggler: () => void;
  theme: string;
};

const LayoutWrapper = (props: Props): JSX.Element => {
  const { children, mountedComponent, themeToggler, theme } = props;

  return (
    <SectionContainer>
      <header>
        <Navbar
          themeToggler={themeToggler}
          mountedComponent={mountedComponent}
          theme={theme}
        />
      </header>
      <main>{children}</main>
      <Footer />
    </SectionContainer>
  );
};

export default LayoutWrapper;
