import styled from 'styled-components';

export const CoffeeCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: -2rem;
    margin-bottom: 1.2rem;
  }

  div {
    display: flex;
    gap: 0.4rem;

    strong {
      padding: 0.4rem 0.8rem;
      border-radius: 100px;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      background: ${({ theme }) => theme.pallete['yellow-100']};
      color: ${({ theme }) => theme.pallete['yellow-700']};
    }
  }
`;
