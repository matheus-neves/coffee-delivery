import styled from 'styled-components';

export const CoffeeCardContainer = styled.li`
  background-color: ${({ theme }) => theme.pallete['gray-200']};
  border-radius: 6px 36px;
  padding: 0 2rem 2rem;
  max-width: 25.6rem;
  width: 100%;

  h3 {
    font-size: 2rem;
  }
`;
