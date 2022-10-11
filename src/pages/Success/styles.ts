import styled from 'styled-components';

const borderWidth = 1;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem 0 4rem;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    padding: 8rem 0 0;
  }

  img {
    width: 100%;
    max-width: 49.2rem;
    margin: 0 auto;
  }
`;

export const SuccessHeader = styled.header`
  h1 {
    color: ${({ theme }) => theme.pallete['yellow-700']};
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  p {
    color: #403937;
    font-size: 2rem;
  }
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    position: relative;
    list-style: none;
    border-radius: 6px 36px;
    padding: 4rem;
    background: #fff;
    background-clip: padding-box;
    border: ${borderWidth}px solid transparent;
    width: 100%;
    max-width: 52.6rem;
    margin: 0 auto;

    @media (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
      max-height: 27rem;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -${borderWidth}px;
      border-radius: inherit;
      background-image: linear-gradient(
        ${({ theme }) => theme.pallete['yellow-500']},
        ${({ theme }) => theme.pallete['purple-500']}
      );
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    flex-direction: row;

    img {
      width: 45%;
    }
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
    gap: 10.2rem;

    li {
      flex-direction: row;
      div {
        align-items: flex-start;
      }
    }

    img {
      width: auto;
    }
  }
`;

interface IconWrapperProps {
  color: string;
}

export const IconWrapper = styled.span<IconWrapperProps>`
  background: ${({ color }) => color};
  border-radius: 50%;

  width: 3.2rem;
  min-width: 3.2rem;
  height: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
