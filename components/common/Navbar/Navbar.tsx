import React, { useState } from 'react';
import Link from 'next/link';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ThemeSwitcher from '@components/ui/ThemeSwitcher/ThemeSwitcher';
import { NavbarContainer } from './Navbar.style';

type Props = {
  mountedComponent: boolean;
  themeToggler: () => void;
  theme: string;
};

const Navbar = (props: Props): JSX.Element => {
  const { mountedComponent, themeToggler, theme } = props;

  const [seeMobileMenu, setSeeMobileMenu] = useState<boolean>(false);
  if (!mountedComponent) return <div />;

  return (
    <NavbarContainer>
      <ul className={seeMobileMenu ? 'menu active' : 'menu'}>
        <li className="logo">
          <Link href="/">BlogApp</Link>
        </li>
        <li className="item">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="theme-toggle">
          <ThemeSwitcher theme={theme} toggleTheme={themeToggler} />
        </li>
        <li className="toggle">
          <ThemeSwitcher theme={theme} toggleTheme={themeToggler} />
          <a
            role="button"
            tabIndex={0}
            aria-label="Click to open mobile menu"
            onClick={() => setSeeMobileMenu(!seeMobileMenu)}
          >
            <FontAwesomeIcon icon={faBars} />
          </a>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
