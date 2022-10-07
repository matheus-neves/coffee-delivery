import styled from 'styled-components';

export const CoffeeCardActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.pallete['black-800']};
  }
`;
