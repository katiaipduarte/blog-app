import styled from 'styled-components';

export const CommentFormContainer = styled.form`
  margin: 2rem auto;

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: ${({ theme }) => theme.grey};
  }

  div {
    margin: 2rem 0;

    input[type='text'],
    textarea {
      width: 100% !important;
      border-radius: 0.4rem;
      border-color: ${({ theme }) => theme.grey};
      box-sizing: border-box;
      margin: 1rem 0;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
      padding: 0.5rem;

      &:focus-visible,
      &:focus:not(:focus-visible) {
        outline: none;
        border: 2px solid ${({ theme }) => theme.secondaryColor};
      }
      display: block;
    }

    input[type='text'] {
      height: 2rem;
    }

    textarea {
      height: 10rem !important;
      resize: none;
    }

    .invalid {
      border: 2px solid ${({ theme }) => theme.primaryColor} !important;
    }

    .message {
      color: ${({ theme }) => theme.primaryColor};
      font-size: 0.75rem;
      display: none;
    }

    .show {
      display: block !important;
    }
  }

  @media all and (min-width: 960px) {
    text-align: left;

    div {
      input[type='text'],
      textarea {
        width: 70% !important;
      }
    }
  }
`;
