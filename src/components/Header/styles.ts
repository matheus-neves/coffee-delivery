import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const LocationIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  height: 3.8rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.pallete['purple-100']};
  color: ${({ theme }) => theme.pallete['purple-700']};

  font-size: 1.4rem;
`;
