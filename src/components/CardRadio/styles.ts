import styled from 'styled-components';
import { CardRadioContainerTypes } from './types';

export const CardRadioContainer = styled.label<CardRadioContainerTypes>`
  display: flex;
  width: 100%;
  height: 5.1rem;
  cursor: pointer;

  & > div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.pallete['gray-400']};
    border-radius: 6px;
    font-size: 1.2rem;

    width: inherit;
    height: inherit;

    color: ${({ theme }) => theme.pallete['black-400']};
    text-transform: uppercase;

    outline: 1px solid
      ${({ theme, error }) => (error ? theme.pallete['red'] : 'transparent')};

    &:hover {
      background-color: ${({ theme }) => theme.pallete['gray-500']};
    }
  }

  span {
    margin-left: 1.2rem;
  }

  input {
    pointer-events: none;
    visibility: hidden;
    width: 0;
    height: 0;

    &:checked + div {
      background-color: ${({ theme }) => theme.pallete['purple-100']};
      outline: 1px solid ${({ theme }) => theme.pallete['purple-500']};
    }
  }
`;
