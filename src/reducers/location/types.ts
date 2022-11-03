export type UserCoords = {
  lat: number;
  long: number;
};

export interface UserLocationData {
  city: string;
  postcode: string;
  county: string;
  country: string;
  countryCode: string;
  formattedAddress: string;
  number: string;
  stateCode: string;
  street: string;
  coords: UserCoords;
}

export type UserLocationState = {
  data: UserLocationData | null;
  userPermission: boolean;
};

export interface LocationState {
  userLocation: UserLocationState;
  isLoading: boolean;
}
