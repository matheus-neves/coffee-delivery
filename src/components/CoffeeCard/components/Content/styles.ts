import styled from 'styled-components';

export const CoffeeCardContent = styled.div`
  padding: 1.6rem 0 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: center;

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.pallete['gray-800']};
  }
`;
