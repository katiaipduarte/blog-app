import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset-css';

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

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
  
    * {
      box-sizing: border-box;
    }
  
    button {
      background-color: ${({ theme }) => theme.primaryColor};
      border-color: transparent;
      border-radius: 0.5rem;
      border-width: 1px;
      color: white;
      transition-duration: 0.15s;
      padding: 1rem;
      opacity: 0.9;
  
      &:hover {
        opacity: 1;
      }
    }
  }
`;
