import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: ${({ theme }) => theme.pallete['gray-100']};
  padding: 2rem 1rem;

  transition: padding 0.3s ease-out;

  &.shrink-shadow {
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.25);
    padding: 1rem 1rem;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    padding: 3.2rem 2rem;

    &.shrink-shadow {
      padding: 1.5rem 2rem;
    }
  }
`;

export const SentinelBox = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: calc(1120px);
  margin: 0 auto;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    max-width: calc(1120px);
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
