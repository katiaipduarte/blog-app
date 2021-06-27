import styled from 'styled-components';

export const SearchBarContainer = styled.form`
    max-width: 32rem;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.text};
    margin: 1rem 0;

    &:focus-visible,
    &:focus:not(:focus-visible) {
      outline: auto;
      color: ${({ theme }) => theme.secondaryColor};
    }

    input {
      border: none;
      color: ${({ theme }) => theme.text};
      outline: none;
      font-size: 1rem;
      width: calc(100% - 2.5rem);
      margin-left: 0.5rem; 
      background: transparent;
    }

    #search-term-btn,
    #clear-search-term-btn {
      background: none;
      border: none;
      cursor: pointer;
      vertical-align: middle;
      svg {
        color: ${({ theme }) => theme.text};
        height: 1rem;
      }
      &:focus {
        outline: none;
      }
    }
  }

  @media (min-width: 1080px) {
    //   width: 50%;
  }
`;
