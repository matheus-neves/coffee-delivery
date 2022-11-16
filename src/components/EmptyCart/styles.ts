import styled from 'styled-components';

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin: 0 auto;

  strong {
    font-size: 2.4rem;
  }

  img {
    max-width: 150px;
  }

  a {
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    color: ${({ theme }) => theme.pallete['black-500']};
  }
`;
