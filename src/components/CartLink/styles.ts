import { CartLinkProps } from '@components/CartLink/types';
import pxToRem from '@src/utils/pxToRem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CartContainer = styled(Link)<CartLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${pxToRem(38)};
  height: ${pxToRem(38)};
  padding: ${pxToRem(8)};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 4px;

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    border-radius: 50%;

    background-color: ${({ theme }) => theme.pallete['yellow-700']};
    color: ${({ theme }) => theme.pallete['white']};

    font-weight: 700;
    font-size: ${pxToRem(12)};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
