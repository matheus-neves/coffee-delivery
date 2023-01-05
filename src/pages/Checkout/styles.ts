import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CheckoutContainerForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 0rem 0 4rem;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    padding: 4rem 0;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
    flex-direction: row;

    section {
      width: 100%;
      max-width: 64rem;
      &:last-child {
        max-width: 44.8rem;
      }
    }
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

export const OrderSubmitButton = styled.button`
  width: 100%;
  height: 4.6rem;
  padding: 1.2rem 0.8rem;
  background-color: ${({ theme }) => theme.pallete['yellow-500']};
  color: #fff;
  border-radius: 6px;

  text-transform: uppercase;

  font-size: 1.4rem;
  font-weight: 700;
  border: 0;

  &:hover {
    background-color: ${({ theme }) => theme.pallete['yellow-700']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Divider = styled.div`
  margin: 2.4rem 0;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.pallete['gray-400']};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CartList = styled.ul`
  overflow-y: scroll;
  overflow-x: auto;
  max-height: 28.5rem;

  padding-right: 0.6rem;
`;

interface PaperProps {
  borderRadius?: string;
  maxwidth?: number;
}

export const Paper = styled.div<PaperProps>`
  padding: 2rem;
  background: ${({ theme }) => theme.pallete['gray-200']};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '6px')};

  & + div {
    margin-top: 1.2rem;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    padding: 4rem;
    max-width: ${({ maxwidth }) => maxwidth && `${maxwidth}rem`};
  }
`;

export const BoxSelectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    flex-direction: row;
  }
`;

export const PaperHeader = styled.div`
  display: flex;
  margin-bottom: 3.2rem;

  svg {
    margin-right: 0.8rem;
    min-width: 2.2rem;
  }

  h3 {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  p {
    font-size: 1.4rem;
    margin-top: 0.2rem;
  }
`;

export const FormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border: 0;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
      flex-direction: row;
      gap: 1.2rem;

      div {
        flex: 1;
      }
    }
  }
`;
