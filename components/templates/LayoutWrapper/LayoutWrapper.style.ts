import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  height: 100vh;
  justify-content: space-between;

  main {
    margin-bottom: auto;
  }

  @media all and (min-width: 960px) {
    max-width: 64rem;
    margin: 0 auto;
  }
`;
