import { IconContainerProps } from '@pages/Home/types';
import pxToRem from '@src/utils/pxToRem';
import styled from 'styled-components';

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 0 auto;
  padding: ${pxToRem(16)} 0 ${pxToRem(16)} 0;

  & > div {
    max-width: 588px;
  }

  img {
    width: 100%;
    max-width: 476px;
    margin: 0 auto;
    height: fit-content;
  }

  @media (min-width: ${({ theme }) => pxToRem(theme.breakpoints.md)}) {
    flex-direction: row;
    padding: ${pxToRem(56)} 0 ${pxToRem(56)} 0;
    gap: ${pxToRem(56)};
  }
`;

export const IntroHeader = styled.div`
  margin-bottom: ${pxToRem(24)};

  h1 {
    margin-bottom: ${pxToRem(4)};
    line-height: ${pxToRem(28)};
  }

  p {
    color: ${({ theme }) => theme.pallete['black-500']};
  }

  @media (min-width: ${({ theme }) => pxToRem(theme.breakpoints.sm)}) {
    h1 {
      font-size: ${pxToRem(48)};
      line-height: ${pxToRem(58)};
      margin-bottom: ${pxToRem(16)};
    }

    p {
      font-size: ${pxToRem(20)};
      line-height: ${pxToRem(26)};
    }
  }

  @media (min-width: ${({ theme }) => pxToRem(theme.breakpoints.lg)}) {
    margin-bottom: ${pxToRem(66)};
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxToRem(10)};
  max-width: ${pxToRem(600)};
  margin-bottom: ${pxToRem(24)};

  @media (min-width: ${({ theme }) => pxToRem(theme.breakpoints.lg)}) {
    grid-template-columns: 1fr 1fr;
    gap: ${pxToRem(20)};
    column-gap: ${pxToRem(0)};
  }

  li {
    display: flex;
    align-items: center;
    font-size: ${pxToRem(16)};
    color: ${({ theme }) => theme.pallete['black-400']};
  }
`;

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;

  svg {
    min-width: ${pxToRem(32)};
    background: ${({ bgColor }) => bgColor};
    border-radius: 50%;
    padding: 8px;
    margin-right: ${pxToRem(12)};
  }
`;
