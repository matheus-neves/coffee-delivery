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
