import axios from 'axios';
import { UserLocation, UserLocationState } from './types';

export async function getLocationData(
  lat: number,
  long: number
): Promise<UserLocation> {
  const { data } = await axios.get(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=${
      import.meta.env.VITE_API_GEOAPIFY_KEY
    }`
  );

  const {
    city,
    postcode,
    county,
    country,
    country_code,
    formatted,
    housenumber,
    state_code,
    street
  } = data.features[0].properties;

  const userLocation: UserLocation = {
    city,
    postcode,
    county,
    country,
    countryCode: country_code,
    formattedAddress: formatted,
    number: housenumber,
    stateCode: state_code,
    street,
    coords: {
      lat,
      long
    }
  };

  return userLocation;
}

export function getStoredUserLocation(): UserLocationState | null {
  const storedUserLocationAsJSON = localStorage.getItem(
    '@coffee-delivery:user-location-1.0.0'
  );

  if (!storedUserLocationAsJSON) {
    return null;
  }

  const parsedUserLocation: UserLocationState = JSON.parse(
    storedUserLocationAsJSON
  );
  return parsedUserLocation;
}
