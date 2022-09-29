import { IconContainerProps } from '@pages/Home/types';
import styled from 'styled-components';

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 0 auto;
  padding: 1.6rem 0 1.6rem 0;

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
    padding: 5.6rem 0 5.6rem 0;
    gap: 5.6rem;
  }
`;

export const IntroHeader = styled.div`
  margin-bottom: 2.4rem;

  h1 {
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
    background: ${({ bgColor }) => bgColor};
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
    align-self: flex-start;
    padding: 3.2rem 0;
  }
`;

export const CoffeeList = styled.ul`
  list-style: none;
`;

export const CoffeeContainer = styled.li`
  background-color: ${({ theme }) => theme.pallete['gray-200']};
  border-radius: 6px 36px;
  padding: 0 2rem 2rem;
  max-width: 25.6rem;
  width: 100%;

  h3 {
    font-size: 2rem;
  }
`;

export const CoffeeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: -2rem;
    margin-bottom: 1.2rem;
  }

  div {
    display: flex;
    gap: 0.4rem;

    strong {
      padding: 0.4rem 0.8rem;
      border-radius: 100px;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      background: ${({ theme }) => theme.pallete['yellow-100']};
      color: ${({ theme }) => theme.pallete['yellow-700']};
    }
  }
`;

export const CoffeeContent = styled.div`
  padding: 1.6rem 0 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: center;

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.pallete['gray-800']};
  }
`;

export const CoffeeFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CoffeePrice = styled.span`
  color: ${({ theme }) => theme.pallete['black-400']};
  font-size: 1.4rem;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2.4rem;
  }
`;

export const CoffeeActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.pallete['black-800']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    border-radius: 6px;

    width: 7.2rem;
    height: 3.8rem;
    background: ${({ theme }) => theme.pallete['gray-400']};

    button {
      display: flex;
      background: none;
      border: 0;
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;
