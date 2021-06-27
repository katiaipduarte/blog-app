import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

    ul {
      li a {
        display: block;
        padding: 1.5rem 0.5rem;
        text-decoration: none;
      }
    }

    .toggle {
      order: 1;
      a {
        svg {
          height: 2rem;
        }
      }
    }

    .logo {
      font-size: 2rem;
      padding: 0.75rem 1rem 0.75rem 0;
      color: ${({ theme }) => theme.primaryColor};
    }

    .item {
      padding: 1rem;
      order: 3;
      width: 100%;
      text-align: center;
      display: none;
      a:hover,
      a:hover::after {
        color: ${({ theme }) => theme.secondaryColor};
      }
      font-size: 1.25rem;
      border-top: 1px solid ${({ theme }) => theme.text};
      border-bottom: 1px solid ${({ theme }) => theme.text};
    }
  }
  .active .item {
    display: block;
  }

  .theme-toggle {
    display: none;
  }

  /* Tablet menu */
  @media all and (min-width: 700px) {
    .menu {
      justify-content: center;
      .logo {
        flex: 1;
      }
      .toggle {
        flex: 1;
        text-align: right;
        order: 2;
      }
    }
  }

  /* Desktop menu */
  @media all and (min-width: 960px) {
    .menu {
      align-items: flex-start;
      flex-wrap: nowrap;
      background: none;
      .logo {
        order: 0;
      }
      .item {
        order: 1;
        position: relative;
        display: block;
        width: auto;
        font-size: 1rem;
        border: none;
      }
      .toggle {
        display: none;
      }
      .theme-toggle {
        order: 2;
        display: inherit;
        padding: 1rem;
      }
    }
  }
`;
