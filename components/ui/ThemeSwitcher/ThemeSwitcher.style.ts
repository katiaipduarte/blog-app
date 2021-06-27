import styled from 'styled-components';

export const ThemeSwitcherButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  svg {
    height: 1.75rem;
  }

  @media all and (min-width: 700px) {
    svg {
      height: 1rem;
    }
  }
`;
