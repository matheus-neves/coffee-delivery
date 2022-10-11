import { IconContainerProps } from '@pages/Home/types';
import styled from 'styled-components';

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 0 auto;
  padding: 1.6rem 0 6rem 0;

  & > div {
    max-width: 58.8rem;
  }

  img {
    width: 100%;
    max-width: 47.6rem;
    margin: 0 auto;
    height: fit-content;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    flex-direction: row;
    padding: 5.6rem 0 10.8rem 0;
    gap: 5.6rem;
  }
`;

export const IntroHeader = styled.div`
  margin-bottom: 2.4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.4rem;
    line-height: 2.8rem;
  }

  p {
    color: ${({ theme }) => theme.pallete['black-500']};
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    h1 {
      font-size: 4.8rem;
      line-height: 5.8rem;
      margin-bottom: 1.6rem;
    }

    p {
      font-size: 2rem;
      line-height: 2.6rem;
    }
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
    margin-bottom: 6.6rem;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 60rem;
  margin-bottom: 2.4rem;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    column-gap: 0;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.pallete['black-400']};
  }
`;

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;

  svg {
    min-width: 3.2rem;
    background: ${({ bgcolor }) => bgcolor};
    border-radius: 50%;
    padding: 8px;
    margin-right: 1.2rem;
  }
`;

export const CoffeeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3.2rem;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
    h2 {
      align-self: flex-start;
    }
  }
`;

export const CoffeeList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem 3.2rem;

  padding: 5.4rem 0;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
