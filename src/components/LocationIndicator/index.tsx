import { useUserLocationContext } from '@src/contexts/UserLocationContext';
import { MapPin, Spinner } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { LocationIndicatorContainer } from './styles';

export function LocationIndicator() {
  const { pallete } = useTheme();
  const { location, isLoadingLocation } = useUserLocationContext();

  const userPermission = location?.userPermission;
  const userLocationData = location?.data;

  const userLocationDataIsEmpty = !userLocationData;

  if (!userPermission && !isLoadingLocation) {
    return (
      <LocationIndicatorContainer empty>
        <MapPin weight="fill" color={pallete['gray-800']} />
        <span>Location not allowed</span>
      </LocationIndicatorContainer>
    );
  }

  return (
    <LocationIndicatorContainer
      empty={isLoadingLocation || userLocationDataIsEmpty}
    >
      {isLoadingLocation || userLocationDataIsEmpty ? (
        <Spinner weight="fill" size={18} className="spinner" />
      ) : (
        <>
          <MapPin weight="fill" color={pallete['purple-500']} />
          <span>
            {userLocationData?.city},{' '}
            {userLocationData?.stateCode ||
              userLocationData?.countryCode.toUpperCase()}
          </span>
        </>
      )}
    </LocationIndicatorContainer>
  );
}
