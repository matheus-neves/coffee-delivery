import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: calc(1120px + 1.6rem);
  height: 100%;
  margin: 0 auto;
  padding: 0 1.6rem;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    max-width: calc(1120px + 2rem);
    padding: 0 2rem;
  }
`;
