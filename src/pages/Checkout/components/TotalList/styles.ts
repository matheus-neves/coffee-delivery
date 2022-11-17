import styled from 'styled-components';

export const TotalListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  padding-right: 0.6rem;
  padding: 2.4rem 0;

  li {
    display: flex;
    justify-content: space-between;
  }

  span {
    color: ${({ theme }) => theme.pallete['black-400']};
  }

  strong {
    font-size: 2rem;
  }
`;

export const TotalLabel = styled.span`
  font-size: 1.4rem;
`;

export const TotalValue = styled.span`
  font-size: 1.6rem;
`;
