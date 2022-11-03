import {
  isFetchingAction,
  removeUserLocationAction,
  setUserLocationAction
} from '@src/reducers/location/actions';
import {
  INITIAL_LOCATION_STATE,
  locationReducer
} from '@src/reducers/location/reducer';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react';
import { UserLocationContextType } from './types';
import { getLocationData, getStoredUserLocation } from './utils';

export const UserLocationContext = createContext({} as UserLocationContextType);

export function UserLocationContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [locationState, dispatch] = useReducer(
    locationReducer,
    {
      INITIAL_LOCATION_STATE
    },
    () => {
      const parsedUserLocation = getStoredUserLocation();

      if (!parsedUserLocation) {
        return INITIAL_LOCATION_STATE;
      }

      return {
        userLocation: parsedUserLocation,
        isLoading: true
      };
    }
  );

  const { isLoading, userLocation } = locationState;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const userCoords = {
          lat: coords.latitude,
          long: coords.longitude
        };

        const storedLocationLat = userLocation?.data?.coords?.lat;
        const storedLocationLong = userLocation?.data?.coords?.long;
        const storedLocationCoords = userLocation.data?.coords;

        if (
          storedLocationCoords &&
          (storedLocationLat === userCoords.lat ||
            storedLocationLong === userCoords.long)
        ) {
          dispatch(isFetchingAction(false));
          return;
        }
        dispatch(removeUserLocationAction({ userPermission: true }));

        (async () => {
          const userLocationData = await getLocationData(
            userCoords.lat,
            userCoords.long
          );
          dispatch(setUserLocationAction(userLocationData));
          const userLocationDataJSON = JSON.stringify({
            data: userLocationData,
            userPermission: true
          });
          localStorage.setItem(
            '@coffee-delivery:user-location-1.0.0',
            userLocationDataJSON
          );
        })();
      },
      err => {
        console.log(err);
        localStorage.removeItem('@coffee-delivery:user-location-1.0.0');
        dispatch(removeUserLocationAction({ userPermission: false }));
      },
      {
        timeout: 1000 * 60 * 1
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({
      location: userLocation,
      isLoadingLocation: isLoading
    }),
    [isLoading, userLocation]
  );

  return (
    <UserLocationContext.Provider value={value}>
      {children}
    </UserLocationContext.Provider>
  );
}

export function useUserLocationContext() {
  const context = useContext(UserLocationContext);

  if (context === undefined) {
    throw new Error(
      'useUserLocationContext must be used within a UserLocationContextProvider'
    );
  }

  return context;
}
