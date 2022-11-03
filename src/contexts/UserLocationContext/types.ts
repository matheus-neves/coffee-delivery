export type UserCoords = {
  lat: number;
  long: number;
};

export type UserLocation = {
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
};

export type UserLocationState = {
  data: UserLocation | null;
  userPermission: boolean;
};

export interface UserLocationContextType {
  location?: UserLocationState;
  isLoadingLocation: boolean;
}
