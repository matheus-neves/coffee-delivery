import styled from 'styled-components';

interface LocationIndicatorContainerType {
  empty: boolean;
}
export const LocationIndicatorContainer = styled.div<LocationIndicatorContainerType>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  height: 3.8rem;
  border-radius: 6px;
  background-color: ${({ theme, empty }) =>
    !empty ? theme.pallete['purple-100'] : theme.pallete['gray-300']};
  color: ${({ theme, empty }) =>
    !empty ? theme.pallete['purple-700'] : theme.pallete['gray-800']};

  font-size: 1.4rem;

  svg {
    margin: 0 auto;
  }
`;
