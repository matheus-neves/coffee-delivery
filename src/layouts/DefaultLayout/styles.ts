import pxToRem from '@src/utils/pxToRem';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: ${({ theme }) => pxToRem(theme.breakpoints.lg)};
  height: 100%;
  margin: 0 auto;
  padding: 0 ${pxToRem(32)};

  @media (max-width: ${({ theme }) => pxToRem(theme.breakpoints.sm)}) {
    padding: 0 ${pxToRem(16)};
  }
`;
