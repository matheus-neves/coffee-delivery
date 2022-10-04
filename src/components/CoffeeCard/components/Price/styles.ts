import styled from 'styled-components';

export const CoffeeCardPrice = styled.span`
  color: ${({ theme }) => theme.pallete['black-400']};
  font-size: 1.4rem;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2.4rem;
  }
`;
