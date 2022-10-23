import styled from 'styled-components';

export const CoffeeCardPrice = styled.span`
  color: ${({ theme }) => theme.pallete['black-400']};

  display: flex;
  align-items: center;

  span {
    font-size: 1.4rem;
    padding-bottom: 10px;
    margin-right: 0.3rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2.4rem;
  }
`;
