import styled from 'styled-components';

export const FooterContainer = styled.footer`
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 4rem 0 1.5rem;

    .social-icons {
      display: flex;

      margin-bottom: 0.75rem;

      a {
        svg {
          height: 1.25rem;
          margin: 0 0.75rem;
        }
        &:hover {
          color: ${({ theme }) => theme.primaryColor};
        }
      }
    }

    .general-information,
    .github-project-info {
      display: flex;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      line-height: 1.25rem;
      opacity: 0.8;
      p {
        margin: 0 0.5rem;
      }

      a {
        &:hover {
          color: ${({ theme }) => theme.primaryColor};
        }
      }
    }
  }
`;
