import { CartLinkProps } from '@components/CartLink/types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CartContainer = styled(Link)<CartLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 3.8rem;
  height: 3.8rem;
  padding: 0.8rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 4px;

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
