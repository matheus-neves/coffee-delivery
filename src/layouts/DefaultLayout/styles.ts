import pxToRem from '@src/utils/pxToRem';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: ${pxToRem(1156)}; // 1120 + 32
  height: 100%;
  margin: 0 auto;
  padding: 0 ${pxToRem(16)};
`;
