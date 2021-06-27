import React from 'react';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeSwitcherButton } from './ThemeSwitcher.style';

type Props = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeSwitcher = (props: Props): JSX.Element => {
  const { theme, toggleTheme } = props;

  return (
    <ThemeSwitcherButton
      aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
      type="button"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </ThemeSwitcherButton>
  );
};

export default ThemeSwitcher;
