import styled from 'styled-components';

export const PostContainer = styled.article`
  padding: 0 1rem;
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;

  header {
    padding-top: 1.5rem;

    dl {
      dd {
        line-height: 1.5rem;
        font-size: 1rem;
        color: ${({ theme }) => theme.grey};
      }
    }

    h1 {
      line-height: 2.25rem;
      font-size: 1.875rem;
      font-weight: 800;
    }
  }

  .post {
    padding-bottom: 2rem;
    .author {
      padding: 2rem 0;
      border-bottom: 1px solid ${({ theme }) => theme.text};
      dd {
        font-size: 0.875rem;
        font-weight: 500;
        white-space: nowrap;
        line-height: 1.25rem;
      }
    }

    .content {
      padding: 2rem 0;
      text-align: justify;
      border-bottom: 1px solid ${({ theme }) => theme.text};

      p {
        margin: 1.25em 0;
        font-size: 1rem;
        line-height: 1.75;
      }
    }

    footer {
      text-align: justify;
      padding-top: 2rem;

      .other-articles {
        display: flex;
        justify-content: space-between;
        .previous-article,
        .next-article {
          padding-bottom: 1rem;
          h2 {
            font-size: 0.75rem;
            line-height: 1rem;
            color: ${({ theme }) => theme.grey};
            text-transform: uppercase;
          }
          button {
            padding-top: 0rem;
            text-transform: capitalize;
          }
        }
      }

      .go-back {
        padding-top: 1rem;
        float: right;
      }
    }
  }
`;
