import styled from 'styled-components';

export const CountButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 6px;

  width: 7.2rem;
  height: 3.8rem;
  background: ${({ theme }) => theme.pallete['gray-400']};

  button {
    display: flex;
    background: none;
    border: 0;
    width: 1.4rem;
    height: 1.4rem;
  }
`;
