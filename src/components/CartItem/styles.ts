import styled from 'styled-components';

export const CartItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.8rem 0.4rem;
  background: ${({ theme }) => theme.pallete['gray-200']};
  gap: 2rem;

  & + li {
    margin-top: 2.4rem;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 0.8rem;
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  strong {
    flex: 1;
    align-self: flex-start;
    text-align: right;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  & > div {
    height: 3.2rem;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: 0;
  border-radius: 6px;
  padding: 0.8rem;
  color: ${({ theme }) => theme.pallete['black-400']};

  font-size: 1.2rem;
  text-transform: uppercase;

  background: ${({ theme }) => theme.pallete['gray-400']};

  span {
    display: none;

    @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
      display: inline;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.pallete['gray-500']};
  }
`;
