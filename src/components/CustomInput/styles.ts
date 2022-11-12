import { CustomInputContainerTypes } from '@components/CustomInput/types';
import styled from 'styled-components';

export const CustomInputContainer = styled.div<CustomInputContainerTypes>`
  position: relative;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    max-width: ${({ $maxWidth }) => `${$maxWidth}rem`};
  }

  input {
    width: 100%;
    padding: 1.2rem;
    padding-right: ${({ optional }) => (optional ? '6.2rem' : '1.2rem')};
    background: ${({ theme }) => theme.pallete['gray-300']};
    color: ${({ theme }) => theme.pallete['black-400']};
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.pallete['red'] : theme.pallete['gray-400']};
    border-radius: 4px;

    ::placeholder {
      color: ${({ theme, error }) =>
        error ? theme.pallete['red'] : theme.pallete['gray-800']};
    }

    &:focus {
      outline: 0;
      border-color: ${({ theme, error }) =>
        error ? theme.pallete['red'] : theme.pallete['yellow-700']};
    }
  }

  span {
    position: absolute;
    right: 1.2rem;
    top: 1.6rem;

    font-style: italic;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.pallete['gray-800']};
  }
`;
