import styled from 'styled-components';

export const CommentsContainer = styled.section`
  margin: 2rem 0;
  text-align: justify;

  ul {
    margin: 2rem 0;

    li {
      margin: 1rem 0;

      h3 {
        color: ${({ theme }) => theme.grey};
        font-size: 0.75rem;
      }

      p {
        margin-top: 0.25rem;
        font-size: 0.5rem;
      }

      .parent,
      .child {
        display: flex;
        justify-content: space-between;
      }

      .child {
        width: calc(100% - 1.5rem);
        paddding: 2rem 0;
        margin: 1rem 0 1rem 1.5rem;
      }
    }
  }

  @media all and (min-width: 960px) {
    ul {
      li {
        h3 {
          font-size: 0.8rem;
        }

        p {
          margin-top: 0.25rem;
          font-size: 1rem;
        }

        .child {
          max-width: 30rem;
          paddding: 2rem 0;
          margin: 1rem 0 1rem 3.5rem;
        }
      }
    }
  }
`;
