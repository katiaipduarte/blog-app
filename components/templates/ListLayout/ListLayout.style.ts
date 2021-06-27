import styled from 'styled-components';

export const ListContainer = styled.section`
  .title {
    padding: 1.5rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.text};

    h1 {
      line-height: 2.25rem;
      font-weight: 800;
      font-size: 1.8rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: ${({ theme }) => theme.grey};
    }
  }

  ul {
    li {
      padding: 1.5rem 0 3rem;

      &:not(&:last-child):not(&.blog-page) {
        border-bottom: 2px solid ${({ theme }) => theme.text};
      }

      article {
        dl {
          dd {
            line-height: 1.5rem;
            font-size: 1rem;
            color: ${({ theme }) => theme.grey};
          }
        }
        .post {
          .description {
            h2 {
              font-wight: 700;
              line-height: 2rem;
              font-size: 1.5rem;
              letter-spacing: 0.025rem;
              color: ${({ theme }) => theme.primaryColor};
            }

            p {
              color: ${({ theme }) => theme.grey};
              font-size: 1rem;
              line-height: 1.75;
              margin-top: 1.5rem;
            }
          }

          button {
            margin-top: 1rem;
          }
        }
      }
    }
  }

  .all-post-btn {
    float: right;
  }

  @media all and (min-width: 700px) {
    .title {
      padding: 2rem 0;

      h1 {
        line-height: 3.5rem;
        font-size: 3.75rem;
      }

      p {
        margin-top: 1.5rem;
      }
    }

    article {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      align-items: baseline;
    }

    .post {
      grid-column: span 3 / span 3;
    }
  }
`;
