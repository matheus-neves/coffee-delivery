import pxToRem from '@src/utils/pxToRem';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(32)} 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(12)};
`;

export const LocationIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(4)};
  padding: ${pxToRem(8)};
  height: ${pxToRem(38)};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.pallete['purple-100']};
  color: ${({ theme }) => theme.pallete['purple-700']};

  font-size: ${pxToRem(14)};
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${pxToRem(38)};
  height: ${pxToRem(38)};
  padding: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.pallete['yellow-100']};
  border-radius: 4px;
  border-width: 0;

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
