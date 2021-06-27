import styled from 'styled-components';

export const CustomErrorContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .http-code {
    padding: 2rem 0;

    h1 {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 2.25rem;
    }
  }

  .message {
    h2 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    button {
      display: block;
      margin: 0 auto;
    }
  }

  @media all and (min-width: 700px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 6rem;

    .http-code {
      h1 {
        font-size: 6rem;
        line-height: 3rem;
        border-right: 2px solid ${({ theme }) => theme.text};
        padding: 0 1.5rem;
      }
    }

    .message {
      max-width: 28rem;
      padding: 0 1.5rem;

      h2 {
        margin-bottom: 2rem;
      }

      button {
        margin: 0;
      }
    }
  }
`;
