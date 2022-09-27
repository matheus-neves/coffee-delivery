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

export const CoffeeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    align-self: flex-start;
    padding: ${pxToRem(32)} 0;
  }
`;

export const CoffeeList = styled.ul`
  list-style: none;
`;

export const CoffeeContainer = styled.li`
  background-color: ${({ theme }) => theme.pallete['gray-200']};
  border-radius: 6px 36px;
  padding: 0 ${pxToRem(20)} ${pxToRem(20)};
  max-width: ${pxToRem(256)};
  width: 100%;

  h3 {
    font-size: ${pxToRem(20)};
  }
`;

export const CoffeeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: ${pxToRem(120)};
    height: ${pxToRem(120)};
    margin-top: -${pxToRem(20)};
    margin-bottom: ${pxToRem(12)};
  }

  div {
    display: flex;
    gap: ${pxToRem(4)};

    strong {
      padding: ${pxToRem(4)} ${pxToRem(8)};
      border-radius: 100px;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: ${pxToRem(10)};
      background: ${({ theme }) => theme.pallete['yellow-100']};
      color: ${({ theme }) => theme.pallete['yellow-700']};
    }
  }
`;

export const CoffeeContent = styled.div`
  padding: ${pxToRem(16)} 0 ${pxToRem(32)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
  text-align: center;

  p {
    font-size: ${pxToRem(14)};
    color: ${({ theme }) => theme.pallete['gray-800']};
  }
`;

export const CoffeeFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CoffeePrice = styled.span`
  color: ${({ theme }) => theme.pallete['black-400']};
  font-size: ${pxToRem(14)};

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: ${pxToRem(24)};
  }
`;

export const CoffeeActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.pallete['black-800']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${pxToRem(8)};
    border-radius: 6px;

    width: ${pxToRem(72)};
    height: ${pxToRem(38)};
    background: ${({ theme }) => theme.pallete['gray-400']};

    button {
      display: flex;
      background: none;
      border: 0;
      width: ${pxToRem(14)};
      height: ${pxToRem(14)};
    }
  }
`;
