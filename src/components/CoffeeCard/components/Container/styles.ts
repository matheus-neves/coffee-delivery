import styled from 'styled-components';

export const CoffeeCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2.4rem 2.4rem;
  max-width: 25.6rem;
  width: 100%;

  background-color: ${({ theme }) => theme.pallete['gray-200']};
  border-radius: 6px 36px;

  h3 {
    font-size: 2rem;
  }
`;
