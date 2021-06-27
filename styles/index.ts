import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset-css';

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}
  
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    font-size: 62.5%;

    a {
      color: inherit;
      text-decoration: none;
    }
    
    h1, h2, h3, h4, h5, h6, p, span {
      cursor: default;
      letter-spacing: 0.05rem;
    }

    h2 {
      font-size: 1.25rem;
      line-height: 1.5rem;
      font-weight: 600;
    }
  
    button {
      border-color: transparent;
      border-radius: 0.5rem;
      border-width: 1px;
      transition-duration: 0.15s;
      opacity: 0.9;
      font-weight: 500;
  
      &:hover {
        opacity: 1;
      }

      &.full {
        background-color: ${({ theme }) => theme.primaryColor};
        color: white;
        padding: 1rem;
      }

      &.transparent {
        color: ${({ theme }) => theme.secondaryColor};
        background-color: transparent;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
      }
    }
  }

  @media all and (min-width: 700px) {
    h2 {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;
