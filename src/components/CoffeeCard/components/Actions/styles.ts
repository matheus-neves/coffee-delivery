import styled from 'styled-components';

export const CoffeeCardActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.pallete['black-800']};
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 3.8rem;
  height: 3.8rem;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.pallete['purple-700']};
  border-radius: 4px;
  border: 0;

  &:disabled {
    pointer-events: none;
    background-color: ${({ theme }) => theme.pallete['purple-500']};
  }

  &:hover {
    transition: background-color 0.3s;
    background-color: ${({ theme }) => theme.pallete['purple-500']};
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.pallete['yellow-700']};
    color: ${({ theme }) => theme.pallete['white']};

    font-weight: 700;
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
